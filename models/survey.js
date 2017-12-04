var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var schema = new Schema({
	"crccleareddate": Date,
	"servicenamebau": String,
	"functionbau": String,
	"crcappointdate": Date,
	"raddm1": Number,
	"voloutdispatches": Number,
	"raddm3": Number,
	"raddm2": Number,
	"brind": String,
	"survey_status": Number,
	"feco": Number,
	"medallia_survey_type": String,
	"crcmaprpts": Number,
	"qtype": String,
	"crcclearedtime": Number,
	"crcdispsubcode": Number,
	"repeat_30": String,
	"agent_eid": Number,
	"volindispatches": Number,
	"crcreptgnumber": Number,
	"crctascopstroubleticket": String,
	"lastname": String,
	"emailid": String,
	"delivery_status": Number,
	"pcan": String,
	"crctypesubcode": Number,
	"remind_date": Date,
	"survey_end_date": 	Date,
	"firstname": String,
	"crcreceiveddate": Date,
	"crcdisp": Number,
	"product": String,
	"survey_template_seq_id": Number,
	"record_unique_id": String,
	"surveytype": String,
	"custfname": String,
	"crcdate": Date,
	"fiosrepairdisp": String,
	"phone": String,
	"centerbau": String,
	"functionalgroupbau": String,
	"geo_reg_area": String,
	"servicetype": String,
	"techarrivaldate": Date,
	"crctypeoftrbl": Number,
	"crcname": String,
	"geo_reg_state": String,
	"crcappointtime": String,
	"recv_dt": Date,
	"email_open_count": Number,
	"selfinstallreport": String,
	"wire_center": String,
	"crcnoofsubrpts": Number,
	"to_address": String,
	"samplingloaddate": Date,
	"bundle_type": String,
	"areabau": String,
	"crcreceivedtime": Number,
	"indicator": String,
	"input_id": String,
	"survey_email_template_name": String,
	"techarrivaltime": Number,
	"survey_template_id": Number,
	"survey_config_id": String,
	"geo_reg_region": String,
	"bundle_desc": String,
	"encrypted_tx_id": String,
	"expire_after_days": Number,
	"regionbau": String,
	"custlname": String,
	"companycode": Number,
	"survey_email_template_id": String,
	"survey_email_template_seq_id": String,
	"customerid": String,
	"crcosind": Number,
	"survey_template_name": String,
	"program_identifier": String,
	"channel": String,
	"survey": [{
			"question": String,
			"question_category": String,
			"question_type": String,
			"max": Number,
			"choices": [{
				"text": String,
				"value": String
			}],
			"required": Boolean,
			"question_templateNm": String,
			"response": Number,
			"pageno": Number
		}
	],
	"responseDate": Date,
	"response_date": Date,
	"survey_status_description": String
});
schema.post('save', function(error, doc, next) {
    if (error.name === 'MongoError' && error.code === 11000) {
      next(new Error('There was a duplicate key error'));
    } else {
        console.log(".");
      next(error);
    }
});
schema.pre('save', function(next) {
    // This middleware will prevent `save()` from executing and go straight
    // to executing the error handling middleware
    next(new Error('pre save error'));
});
schema.post('save', function(doc, next) {
    // If this hook is defined _before_ an error handler middleware, this will
    // skip all other non-error-handler post save hooks and execute the next
    // error handler middleware
    next(new Error('post save error'));
});
module.exports = mongoose.model('Survey',schema);
