// DOCUMENTED
/**
 * This file contains the implementation of the EventService class.
 * For more information, see https://dove.feathersjs.com/guides/cli/service.class.html#database-services.
 */

import type { Params } from '@feathersjs/feathers'
import type { KnexAdapterOptions, KnexAdapterParams } from '@feathersjs/knex'
import { KnexService } from '@feathersjs/knex'
import { app } from '../../app'
import type { Application } from '../../declarations'
import type { Event, EventData, EventPatch, EventQuery } from './events.schema'

export type EventParams = KnexAdapterParams<EventQuery>

/**
 * The EventService class extends KnexService and provides tailored
 * functionality for working with the events schema in the database.
 *
 * ServiceParams specifies the Params type for the service.
 */
export class EventService<
  ServiceParams extends Params = EventParams
> extends KnexService<Event, EventData, ServiceParams, EventPatch> {
  /**
   * Create a new event.
   * Currently, this function simply returns the provided event data immediately.
   * @param {EventData} data - The event data object.
   * @returns {Promise<any>} - The created event data.
   */
  // @ts-ignore
  async create(data: EventData): Promise<any> {
    const db = app.get('vectordb')
    await db.from('events').insert(data)
    return data
  }

  /**
   * Find events.
   * This function searches for events in the database given an embedding and other query parameters.
   * @param {ServiceParams} [params] - The query parameters for the search.
   * @returns {Promise<any>} - The search results.
   */
  // @ts-ignore
  async find(params?: ServiceParams) {
    const db = app.get('dbClient')
    if (params.query.embedding) {
      const blob = atob(params.query.embedding)
      const ary_buf = new ArrayBuffer(blob.length)
      const dv = new DataView(ary_buf)
      for (let i = 0; i < blob.length; i++) dv.setUint8(i, blob.charCodeAt(i))
      const f32_ary = new Float32Array(ary_buf)
      const param = params.query
      const res = await db
        .from('events')
        .select('*')
        .where({
          ...(param.type && { type: param.type }),
          ...(param.id && { id: param.id }),
          ...(param.sender && { sender: param.sender }),
          ...(param.client && { client: param.client }),
          ...(param.channel && { channel: param.channel }),
          ...(param.projectId && { projectId: param.projectId }),
          ...(param.content && { content: param.content }),
        })
        .select(
          db.raw(
            `embedding <-> ${"'[" + f32_ary.toString() + "]'"} AS distance`
          )
        )
        .orderBy('distance', 'asc')
        .limit(params.query['$limit'])

      return { events: res }
    }

    // If not searching by embedding, perform a normal query
    const param = params.query

    const res = await db
      .from('events')
      .select('*')
      .where({
        ...(param.type && { type: param.type }),
        ...(param.id && { id: param.id }),
        ...(param.sender && { sender: param.sender }),
        ...(param.client && { client: param.client }),
        ...(param.channel && { channel: param.channel }),
        ...(param.projectId && { projectId: param.projectId }),
      })
      // get the newest events first
      .orderBy('date', 'desc')
      // limit the number of events returned
      .limit(params.query['$limit'])
      // reverse the order of the events so that the newest events are last
      .then((res: any) => res.reverse())

    return { events: res as unknown as { data: Array<any> } }
  }

  /**
   * Remove events.
   * This function removes events from the database.
   * @param {string[]} id - The ID of the event to remove.
   * @returns {Promise<any>} - The removed event data.
   */
  // @ts-ignore
  async remove(id: string): Promise<any> {
    const ids = id.split('&')
    const db = app.get('vectordb')
    const res = await db.from('events').whereIn('id', ids).del()
    return res
  }
}

/**
 * Get options for the event service.
 * This function returns the options required by the KnexAdapter.
 * @param {Application} app - The Feathers application object.
 * @returns {KnexAdapterOptions} - The options required by KnexAdapter.
 */
export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: {
      default: 1000,
      max: 1000,
    },
    Model: app.get('dbClient'),
    name: 'events',
  }
}
