const Survey = require('./models/survey');
const mongoose = require('mongoose');
const faker = require('faker');
const dotenv = require('dotenv');
const async = require('async');

dotenv.load({
	path: '.env'
});

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('error', () => {
	console.log('%s MongoDB connection error. Please make sure MongoDB is running.');
	process.exit();
});

var done = 0;
var surveyDocument = {};

async.times(process.env.HOWMANY, function(i, next) {
    var streetAddress = faker.address.streetAddress();
    var city = faker.address.city();
    var zipCode = faker.address.zipCode();
    var stateAbbr = faker.address.stateAbbr();
    var state = faker.address.state()
    var firstName = faker.name.firstName();
    var lastName = faker.name.lastName();
    var email = faker.internet.email();
    var phone = faker.phone.phoneNumber();
    var customerNumber = faker.random.number({
        'min': 1000000,
        'max': 9999999
    })
    //surveyDocument = {
    surveyDocument = {
        "crccleareddate": new Date(faker.date.past().toISOString()),
        "servicenamebau": "Dispatch",
        "functionbau": "Field Ops",
        "crcappointdate": new Date(faker.date.past().toISOString()),
        "raddm1": faker.random.number({
            'min': 100000,
            'max': 999999
        }),
        "voloutdispatches": "1",
        "raddm3": faker.random.number({
            'min': 100000,
            'max': 999999
        }),
        "raddm2": faker.random.number({
            'min': 1000,
            'max': 99999
        }),
        "brind": "R",
        "survey_status": 3,
        "feco": "0",
        "medallia_survey_type": "Dispatch",
        "crcmaprpts": "0",
        "qtype": "F6",
        "crcclearedtime": faker.random.number({
            'min': 0,
            'max': 24
        }) + ".00.00",
        "crcdispsubcode": "9",
        "repeat_30": "Y",
        "agent_eid": faker.random.number({
            'min': 1000000,
            'max': 9999999
        }),
        "volindispatches": "0",
        "crcreptgnumber": faker.random.number({
            'min': 1000000,
            'max': 9999099
        }),
        "crctascopstroubleticket": stateAbbr + faker.random.number({
            'min': 100000,
            'max': 999999
        }),
        "lastname": lastName,
        "emailid": email,
        "delivery_status": 1,
        "pcan": "A021748097",
        "crctypesubcode": faker.random.number({
            'min': 0,
            'max': 99
        }),
        "remind_date": faker.date.past().toISOString(),
        "survey_end_date": faker.date.past().toISOString(),
        "firstname": firstName,
        "crcreceiveddate": faker.date.past().toISOString(),
        "crcdisp": faker.random.number({
            'min': 0,
            'max': 99
        }),
        "product": "FIOS",
        "survey_template_seq_id": 4,
        "record_unique_id": "cmb_nps_" + customerNumber,
        "surveytype": "BIG5",
        "custfname": firstName,
        "crcdate": new Date(faker.date.past().toISOString()),
        "fiosrepairdisp": "Y",
        "phone": phone,
        "centerbau": stateAbbr + "NE N Cent",
        "functionalgroupbau": "Repair",
        "geo_reg_area": state,
        "tech_eid": faker.random.number({
            'min': 1000000,
            'max': 9999999
        }),
        "servicetype": "repair",
        "techarrivaldate": new Date(faker.date.past().toISOString()),
        "crctypeoftrbl": "9",
        "crcname": firstName + ' ' + lastName,
        "geo_reg_state": stateAbbr,
        "crcappointtime": faker.random.number({
            'min': 0,
            'max': 24
        }) + "00.00",
        "recv_dt": new Date(faker.date.past().toISOString()),
        "email_open_count": 0,
        "selfinstallreport": "0",
        "wire_center": state + "2238",
        "crcnoofsubrpts": "0",
        "to_address": email,
        "samplingloaddate": faker.date.past().toISOString(),
        "bundle_type": ": FiOS Digital Voice, FiOS Internet, FiOS TV",
        "areabau": stateAbbr,
        "crcreceivedtime": faker.random.number({
            'min': 0,
            'max': 24
        }) + "." + faker.random.number({
            'min': 0,
            'max': 60
        }) + ".00",
        "indicator": "(P) Fios Repair Dispatch",
        "input_id": "SURVEY_CMB_cmb_invitation_calldispatch_03012016_vj03.csv",
        "survey_email_template_name": "CMB_SURVEY_TEST",
        "techarrivaltime": faker.random.number({
            'min': 0,
            'max': 24
        }) + "." + faker.random.number({
            'min': 0,
            'max': 60
        }) + ".00",
        "survey_template_id": 1,
        "survey_config_id": "config_003",
        "geo_reg_region": state,
        "bundle_desc": "Triple Play: FiOS Digital Voice, FiOS Internet, FiOS TV",
        "encrypted_tx_id": "mXq3sd%2BnqInoc%2B3t2B72S%2FBHskt18awz%2FYw1qwdnwIc%3D",
        "expire_after_days": "7",
        "regionbau": state,
        "custlname": faker.name.lastName(),
        "companycode": "10",
        "survey_email_template_id": "22649",
        "survey_email_template_seq_id": "45028",
        "customerid": customerNumber,
        "crcosind": "0",
        "survey_template_name": "cmb_survey_test_template",
        "program_identifier": "nps",
        "channel": "TELETECH TS",
        "survey": [{
                "question": "Overall how satisfied were you with the service you received?",
                "question_category": "OSAT",
                "question_type": "rating",
                "max": 5,
                "choices": [{
                    "text": "",
                    "value": ""
                }],
                "required": false,
                "question_templateNm": "cmb_survey_test_template",
                "response": faker.random.number({
                    'min': 0,
                    'max': 5
                }),
                "pageno": 1
            },
            {
                "question": "Please tell us why you chose this rating or what we can do to improve our service?",
                "question_category": "COMMENTS",
                "question_type": "textarea",
                "max": 5,
                "choices": [{
                    "text": "",
                    "value": ""
                }],
                "required": false,
                "question_templateNm": "cmb_survey_test_template",
                "response": faker.lorem.sentence(),
                "pageno": 1
            },
            {
                "question": "Based on this interaction, how easy were we to do business with?",
                "question_category": "EASE",
                "question_type": "rating",
                "max": 5,
                "choices": [{
                    "text": "",
                    "value": ""
                }],
                "required": false,
                "question_templateNm": "cmb_survey_test_template",
                "pageno": 2,
                "response": faker.random.number({
                    'min': 0,
                    'max': 5
                })
            },
            {
                "question": "What can we do to make it easier for you to do business with us?",
                "question_category": "COMMENTS",
                "question_type": "textarea",
                "max": 5,
                "choices": [{
                    "text": "",
                    "value": ""
                }],
                "required": false,
                "question_templateNm": "cmb_survey_test_template",
                "pageno": 2,
                "response": faker.lorem.sentence()
            }
        ],
        "responseDate": new Date(faker.date.past().toISOString()),
        "response_date": new Date(faker.date.past().toISOString()),
        "survey_status_description": "COMPLETED"
    };
    survey = new Survey(surveyDocument);
    survey.save(function (err, surveyId) {
        if (err) {
            console.log('error: ', err.message);
            exit();
        }
        done++;
        console.log("Done: " + done + " Write " + surveyId);
        if (done >= 20) {
            exit();
        }
    });
});

function exit() {
	mongoose.disconnect();
}
