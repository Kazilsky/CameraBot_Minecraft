const mineflayer = require('mineflayer')
const mineflayerViewer = require('prismarine-viewer').mineflayer

test = true

const armorTypes = {
  helmet: [0, 1.8, 0],
  chestplate: [0, 1.2, 0],
  leggings: [0, 0.75, 0],
  boots: [0, 0.1, 0]
}

const bot = mineflayer.createBot({
  version: '1.16.5',
  host: "localhost",
  port: 25565,
  username: "Bot",
  // password: process.argv[5]
})

function itemToString (item) {
  if (item) {
    return `${item.name} x ${item.count}`
  } else {
    return '(nothing)'
  }
}

function sayItems (items = null) {
  if (!items) {
    items = bot.inventory.items()
    if (bot.registry.isNewerOrEqualTo('1.9') && bot.inventory.slots[45]) items.push(bot.inventory.slots[45])
  }
  const output = items.map(itemToString).join(', ')
  if (output) {
    // bot.chat(output)
  } else {
    // bot.chat('empty')
  }
}

function itemByName (name) {
  const items = bot.inventory.items()
  console.log(items);
  if (bot.registry.isNewerOrEqualTo('1.9') && bot.inventory.slots[36]) items.push(bot.inventory.slots[36])
  return items.filter(item => item.name === name)[0]
}

function remove(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === null) {
          arr.splice(i, 1);
      }
  }
  return arr; 
}

async function equipCamera(name) {
  const item = itemByName(name)
  if (test === true) {
    try {
      await bot.equip(name, "head")
      // bot.chat(`equipped ${name}`);
    } 
    catch (err) {
      // bot.chat(`cannot equip ${name}: ${err.message}`)
    }
  } 
  else {
    // bot.chat(`I have no ${name}`)
  }
}

// if (process.argv.length < 4 || process.argv.length > 6) {
//   console.log('Usage : node viewer.js <host> <port> [<name>] [<password>]')
//   process.exit(1)
// }

bot.once('spawn', () => {
  bot.chat('/skin set markyss')
  
  // console.log(bot.inventory);
  
  mineflayerViewer(bot, { port: 3007, firstPerson: true, viewDistance: 8})
  NullItem = remove(bot.inventory.slots)
  if (String(NullItem) === "") {
    null
  }
  else {
    console.log(NullItem);
    setTimeout(Items = sayItems, 2000)
    setTimeout(itemByName, 3000, 838)
    setTimeout(equipCamera, 4000, 838)
  };
})