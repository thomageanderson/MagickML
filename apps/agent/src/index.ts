// DOCUMENTED
/**
 * Initializes the application and starts the agent.
 * This file initializes the application and starts the agent, then loads the app's plugins and logs them.
 * @packageDocumentation
 */

import { AgentManager } from '@magickml/agents'
import { app, initApp } from '@magickml/server-core'
import { initLogger, getLogger } from '@magickml/core'
import 'regenerator-runtime/runtime'
import pluginExports from './plugins'
import { PRODUCTION, DONT_CRASH_ON_ERROR } from '@magickml/core'

/**
 * Asynchronously loads the application's plugins and logs their names.
 * @returns A `Promise` that resolves when the plugins have been loaded.
 */
async function loadPlugins(): Promise<void> {
  logger.info('Loading plugins...')
  // Import the plugins and get the default exports.
  // Log the loaded plugin names.
  const pluginNames = Object.values(pluginExports)
    .map((p: any) => p.name)
    .join(', ')
  logger.info('Plugins loaded: %o', pluginNames)
}

/**
 * Initializes the application and starts the agent.
 * @returns A `Promise` that resolves when the application is initialized.
 */
async function initializeAgent(): Promise<void> {
  logger.info('Initializing agent...')
  await loadPlugins()

  new AgentManager(app)

  logger.info('Agent initialized.')
}

// Initialize the application and start the agent.

initLogger({ name: 'agent' })
const logger = getLogger()


if (PRODUCTION || DONT_CRASH_ON_ERROR) {
  process.on('uncaughtException', (e, o) => {
    logger.error('Uncaught exception: %s\n From: %o', e, o)
  })

  process.on('unhandledRejection', (e, o) => {
    logger.error('Unhandled rejection: %s\n From: %o', e, o)
  })
}

await initApp()
initializeAgent()
