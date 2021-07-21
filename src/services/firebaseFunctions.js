import { auth } from './firebaseConfig'

// Different methods
// 1) Creating a user
export const createUser = (email, password) => {
	auth.createUserWithEmailAndPassword(email, password)
		.then(userCredential => {
			// Signed in
			var user = userCredential.user
			console.log(user)
			// ...
		})
		.catch(error => {
			console.log(error)
			// ..
		})
}

// 2) Status of the app (checks whether there is a user logged in or not)
export const getStatus = () => {
	auth.onAuthStateChanged(user => {
		if (user) {
			// User is signed in, see docs for a list of available properties
			// https://firebase.google.com/docs/reference/js/firebase.User
			var uid = user.uid
			console.log("State change:" + uid)
			// ...
		} else {
			console.log('State change: All empty here!')
			// User is signed out
			// ...
		}
	})
}

// 3) Logout a user from the app
export const logoutUser = () => {
	auth.signOut()
		.then(() => {
			// Sign-out successful.
			console.log('Signed out!')
		})
		.catch(error => {
			console.log(error)
			// An error happened.
		})
}

// 4) Sign in a user
export const signinUser = (email, password) => {
	auth.signInWithEmailAndPassword(email, password)
		.then(userCredential => {
			// Signed in
			var user = userCredential.user
			console.log(user)
			// ...
		})
		.catch(error => {
			var errorCode = error.code
			var errorMessage = error.message
			console.log({ errorCode, errorMessage })
		})
}
