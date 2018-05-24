/**

  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
                                                                                     
                                                                                   
 *  DO NOT EDIT HIS FILE!!
 * 
 *  FOR CUSTOMIZE DB SCHEMA PLEASE EDIT db/testproject_db_customSchema.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT EASYDEV'S CODE GENERATION --
 * 
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const createUser = require('../security/security.js');

const db_testproject_db_schema = [];
const db_testproject_db = [];

/**
 * SCHEMA DB testproject_db
 */



 /**
  * Test123
  */
db_testproject_db_schema.Test123 = new mongoose.Schema({
	mail: {
		type: 'String'
	},
	name: {
		type: 'String'
	},
	password: {
		type: 'String', 
		required : true
	},
	roles: [{
		type: 'String'
	}],
	surname: {
		type: 'String'
	},
	username: {
		type: 'String', 
		required : true
	},
	//RELATIONS
	
	
	//EXTERNAL RELATIONS
	/*
	file: {
		type: Schema.ObjectId,
		ref : "a2"
	},
	*/
});


 /**
  * a2
  */
db_testproject_db_schema.a2 = new mongoose.Schema({
	//RELATIONS
	file: {
		type: Schema.ObjectId,
		ref : "Test123"
	},
	
	
	//EXTERNAL RELATIONS
	/*
	*/
});



// Import schema customization
require('./testproject_db_customSchema.js');
var testproject_db_model = require('./testproject_db_crud.js');

// Declare mongoose model

db_testproject_db.Test123 = testproject_db_model.connection.model('Test123', db_testproject_db_schema.Test123 );
db_testproject_db.a2 = testproject_db_model.connection.model('a2', db_testproject_db_schema.a2 );

module.exports = db_testproject_db;

// Create ADMIN user if does not exist
createUser.createUser();
