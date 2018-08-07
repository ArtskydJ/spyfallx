const TYPE = require(`./dynamo-types.js`)

const field = (name, type) => ({
	AttributeName: name,
	AttributeType: type,
})

const playerSecret = {
	secret: field(`secret`, TYPE.STRING),
	playerId: field(`playerId`, TYPE.STRING),
	ttl: field(`ttl`, TYPE.NUMBER),
}

const player = {
	id: field(`id`, TYPE.STRING),
	secret: field(`secret`, TYPE.STRING),
	name: field(`name`, TYPE.STRING),
	ttl: field(`ttl`, TYPE.NUMBER),
}

const game = {
	id: field(`id`, TYPE.STRING),
	playerIds: field(`playerIds`, TYPE.STRING_SET),
	roles: field(`roles`, TYPE.MAP),
	active: field(`active`, TYPE.BOOLEAN),
	locationSeed: field(`locationSeed`, TYPE.STRING),
	location: field(`location`, TYPE.STRING),
	spySeed: field(`spySeed`, TYPE.STRING),
	firstPlayerId: field(`firstPlayerId`, TYPE.STRING),
	startTimestamp: field(`startTimestamp`, TYPE.STRING),
	ttl: field(`ttl`, TYPE.NUMBER),
}

module.exports = {
	playerSecret,
	player,
	game,
}
