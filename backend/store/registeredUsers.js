const registeredUsers = [];

function findRegisteredUser(token) {
	return registeredUsers.find((user) => user.token == token);
}

function addUserSession(token, socketId) {
	let updatedUser;
	registeredUsers.map((user) => {
		if (user.token == token) {
			user.currentSessions.push(socketId);
			updatedUser = user;
		}
	});
	return updatedUser;
}

function removeGameFromUser(token, gameId) {
	let userToUpdate;
	registeredUsers.map(user => {
		if (user.token == token) {
			user.gameId = "";
			userToUpdate = user
		}
	})
	return userToUpdate
}

function setUserGame(token, gameId) {
	let userToUpdate;
	registeredUsers.map(user => {
		if (user.token == token) {
			user.gameId = gameId;
			userToUpdate = user
		}
	})
	return userToUpdate
}

function deleteSocket(socketId) {
	let userToReturn;
	registeredUsers.map((user) => {
		var index = user.currentSessions.indexOf(socketId);
		if (index > -1) {
			userToReturn = user
			user.currentSessions.splice(index, 1);
			return;
		}
	});

	return userToReturn;
}

function getAllRegisteredUsers() {
	return registeredUsers;
}

function setRegisteredUser(token, name, currentSessions) {
	const registeredUser = {
		token: token,
		name: name,
		currentSessions: currentSessions,
		socketWithGame: "",
		gameId: ""
	};
	registeredUsers.push(registeredUser);
	return registeredUser;
}

function setGameSocket(token, socketId) {
	let updatedUser;
	registeredUsers.map(user => {
		if (user.token == token) {
			user.socketWithGame = socketId;
			updatedUser = user
			return;
		}
	})
	return updatedUser;
}


function removeGameSocket(token) {
	let updatedUser;
	registeredUsers.map(user => {
		if (user.token === token) {
			user.socketWithGame = "";
			updatedUser= user
			return
		}
	})
	console.log("remove game socket working " + updatedUser)
	return updatedUser;
}


module.exports = {
	findRegisteredUser,
	setRegisteredUser,
	getAllRegisteredUsers,
	addUserSession,
	deleteSocket,
	setUserGame,
	removeGameFromUser,
	setGameSocket,
	removeGameSocket
};