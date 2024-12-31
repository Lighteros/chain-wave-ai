importScripts('https://cdn.jsdelivr.net/npm/guesslang-js@latest/dist/lib/guesslang.min.js')

self.guesslang = new GuessLang()

self.onmessage = async (event) => {
  const predictions = await self.guesslang.runModel(event.data)
  self.postMessage(predictions)
}
