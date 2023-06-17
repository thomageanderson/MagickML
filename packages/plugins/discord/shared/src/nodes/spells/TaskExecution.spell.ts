const TaskExecution = {"id":"317dda4a-729e-4819-acf0-03ecc6a79a5b","name":"TaskExecution","projectId":"bb1b3d24-84e0-424e-b4f1-57603f307a89","hash":"dbb7d3396d3b9a7e7c94381855cc9f91","createdAt":"1682567017740","updatedAt":"1682590938081","graph":{"id":"demo@0.1.0","nodes":{"232":{"id":232,"data":{"name":"Input - Discord (Text)","text":{"id":"2eb64348-adee-4118-bcca-19697ca3a16a","inputs":{"Input - Default":{"type":"playtest","client":"playtest","sender":"playtestSender","agentId":"preview","channel":"playtest","content":"testing","entities":["playtestSender","Agent"],"observer":"Agent","projectId":"bb1b3d24-84e0-424e-b4f1-57603f307a89","channelType":"playtest"}},"secrets":{},"projectId":"bb1b3d24-84e0-424e-b4f1-57603f307a89","spellName":"Starter","publicVariables":"[]"},"isInput":true,"outputs":[],"success":false,"socketKey":"9d61118c-3c5a-4379-9dae-41965e56207f","useDefault":false,"dataControls":{"inputType":{"expanded":true},"inputName":{"expanded":true},"useTrigger":{"expanded":true},"useData":{"expanded":true}},"defaultValue":"Hello world","playtestToggle":{"outputs":[],"receivePlaytest":false},"inputType":"Discord (Text)","useTrigger":true,"useData":true,"inputName":"Default"},"inputs":{},"outputs":{"output":{"connections":[{"node":494,"input":"event","data":{"hello":"hello"}}]},"trigger":{"connections":[{"node":494,"input":"trigger","data":{"hello":"hello"}}]}},"position":[-1104,-48],"name":"Input"},"233":{"id":233,"data":{"name":"Output","success":false,"socketKey":"0f17a35e-1380-428b-bc87-4a38d207fefc","dataControls":{"name":{"expanded":true}},"isOutput":true,"sendToPlaytest":true},"inputs":{"trigger":{"connections":[{"node":493,"output":"trigger","data":{"hello":"hello"}}]},"input":{"connections":[{"node":493,"output":"output","data":{"hello":"hello"}}]},"event":{"connections":[]}},"outputs":{"trigger":{"connections":[]},"output":{"connections":[]}},"position":[1104,48],"name":"Output"},"493":{"id":493,"data":{"success":false},"inputs":{"trigger":{"connections":[{"node":840,"output":"trigger","data":{"hello":"hello"}}]},"string":{"connections":[{"node":840,"output":"result","data":{"hello":"hello"}}]}},"outputs":{"trigger":{"connections":[{"node":233,"input":"trigger","data":{"hello":"hello"}}]},"output":{"connections":[{"node":233,"input":"input","data":{"hello":"hello"}}]}},"position":[640,112],"name":"Echo"},"494":{"id":494,"data":{"success":false,"socketKey":"bbd9c07c-7bcc-454a-b5fe-cc6fd63f6a94"},"inputs":{"trigger":{"connections":[{"node":232,"output":"trigger","data":{"hello":"hello"}}]},"event":{"connections":[{"node":232,"output":"output","data":{"hello":"hello"}}]}},"outputs":{"trigger":{"connections":[{"node":837,"input":"trigger","data":{"hello":"hello"}}]},"agentId":{"connections":[]},"content":{"connections":[{"node":837,"input":"input","data":{"hello":"hello"}}]},"client":{"connections":[]},"channel":{"connections":[]},"channelType":{"connections":[]},"entities":{"connections":[]},"projectId":{"connections":[]},"observer":{"connections":[]},"sender":{"connections":[]},"rawData":{"connections":[]}},"position":[-816,-48],"name":"Event Destructure"},"836":{"id":836,"data":{"fewshot":" \"You are an AI who performs one task based on the following objective: {{objective}}\"\n\" Take into account these previously completed tasks: {{context}}.\"\n\" Your task: {{task}}.\"\n\" Response:\"","dataControls":{"inputs":{"expanded":true},"fewshot":{"expanded":true}},"inputs":[{"name":"task","taskType":"output","socketKey":"task","connectionType":"input","socketType":"anySocket"},{"name":"context","taskType":"output","socketKey":"context","connectionType":"input","socketType":"anySocket"},{"name":"objective","taskType":"output","socketKey":"objective","connectionType":"input","socketType":"anySocket"}],"success":false},"inputs":{"task":{"connections":[{"node":838,"output":"task","data":{"hello":"hello"}}]},"context":{"connections":[{"node":838,"output":"context","data":{"hello":"hello"}}]},"objective":{"connections":[{"node":838,"output":"objective","data":{"hello":"hello"}}]},"trigger":{"connections":[{"node":838,"output":"trigger","data":{"hello":"hello"}}]}},"outputs":{"trigger":{"connections":[{"node":840,"input":"trigger","data":{"hello":"hello"}}]},"prompt":{"connections":[{"node":840,"input":"input","data":{"hello":"hello"}}]}},"position":[16,-32],"name":"Text Template"},"837":{"id":837,"data":{"success":false},"inputs":{"trigger":{"connections":[{"node":494,"output":"trigger","data":{"hello":"hello"}}]},"input":{"connections":[{"node":494,"output":"content","data":{"hello":"hello"}}]}},"outputs":{"trigger":{"connections":[{"node":838,"input":"trigger","data":{"hello":"hello"}}]},"output":{"connections":[{"node":838,"input":"object","data":{"hello":"hello"}}]}},"position":[-544,-32],"name":"JSON To Object"},"838":{"id":838,"data":{"dataControls":{"outputs":{"expanded":true}},"outputs":[{"name":"task","taskType":"output","socketKey":"task","connectionType":"output","socketType":"anySocket"},{"name":"context","taskType":"output","socketKey":"context","connectionType":"output","socketType":"anySocket"},{"name":"objective","taskType":"output","socketKey":"objective","connectionType":"output","socketType":"anySocket"}],"success":false},"inputs":{"trigger":{"connections":[{"node":837,"output":"trigger","data":{"hello":"hello"}}]},"object":{"connections":[{"node":837,"output":"output","data":{"hello":"hello"}}]}},"outputs":{"task":{"connections":[{"node":836,"input":"task","data":{"hello":"hello"}}]},"context":{"connections":[{"node":836,"input":"context","data":{"hello":"hello"}}]},"objective":{"connections":[{"node":836,"input":"objective","data":{"hello":"hello"}}]},"trigger":{"connections":[{"node":836,"input":"trigger","data":{"hello":"hello"}}]}},"position":[-272,-32],"name":"Get Values From Object"},"840":{"id":840,"data":{"model":"text-davinci-003","temperature":0.5,"max_tokens":100,"top_p":1,"frequency_penalty":0,"presence_penalty":0,"stop":"###","dataControls":{"model":{"expanded":true},"temperature":{"expanded":true},"max_tokens":{"expanded":true},"top_p":{"expanded":true},"frequency_penalty":{"expanded":true},"presence_penalty":{"expanded":true},"stop":{"expanded":true}}},"inputs":{"trigger":{"connections":[{"node":836,"output":"trigger","data":{"hello":"hello"}}]},"input":{"connections":[{"node":836,"output":"prompt","data":{"hello":"hello"}}]}},"outputs":{"trigger":{"connections":[{"node":493,"input":"trigger","data":{"hello":"hello"}}]},"result":{"connections":[{"node":493,"input":"string","data":{"hello":"hello"}}]}},"position":[336,32],"name":"Generate Text"}},"comments":[]}}

export default TaskExecution