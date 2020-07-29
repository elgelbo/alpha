module.exports = {
  title: 'Spanish',
  intro: 'ESP: Hello! Thank you for taking the survey.',
  instructions:
    "ESP: INSTRUCTIONS: Please text your response to the following questions.\r\nYour input will help shape the County of San Diego's first-ever Environmental Justice Element. (A part of the General Plan.)\r\nLearn more: https://lmgtfy.com/?q=environmental+justice",
  disclaimer:
    'ESP: DISCLAIMER: We respect your privacy.\r\nYour data will only be used to communicate with you about this project and will not be shared or distributed.',
  close: 'ESP: Thank you for completing the survey',
  questions: [
    // 0
    {
      text: 'ESP: For English, reply with 1.\r\nPara Español, oprima número 2',
      status: 'Open',
      type: 'lang',
    },
    // 1
    {
      text: 'Where do you live?',
      status: 'Open',
      type: 'address',
      location: 'home',
    },
    // 2
    {
      text:
        'ESP: Do you think there are adequate public facilities and services in your community?',
      status: 'Open',
      type: 'single',
      options: [
        'Strong Disagree',
        'Disagree',
        'Mixed / Unsure',
        'Agree',
        'Strong Agree',
      ],
    },
    // 3
    {
      text: 'ESP: Is there anything else you want to share?',
      status: 'Open',
      type: 'txt',
    },
    // 4
    {
      text:
        "ESP: Would you like to receive updates about the County's Environmental Justice Element?",
      status: 'Open',
      type: 'boolean',
    },
    // 5
    {
      text: 'ESP: What is your email address?',
      status: 'Open',
      type: 'email',
      skips: [
        {
          qNum: 4,
          criteria: [false],
        },
      ],
    },
  ],
};
