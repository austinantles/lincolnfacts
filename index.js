/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

const languageStrings = {
    'en': {
        translation: {
            FACTS: [
               'He was the only president to have a patent: Lincoln invented a device to free steamboats that ran aground.',
               'He practiced law without a degree. Lincoln had about 18 months of formal schooling.',
               'He wanted women to have the vote in 1836. The future president was a suffragette before it became fashionable.',
               'He was a big animal lover, but he wouldn’t hunt or fish. If he were alive today, Lincoln would be running an animal shelter.',
               'He really was a wrestler. Lincoln was documented as taking part in wrestling bouts. We don’t think he wore a mask or had a manager.',
               'He lost in his first bid for a presidential ticket. The unknown Lincoln was an unsuccessful vice presidential candidate in 1856 at the Republican convention.',
               'He never belonged to an organized church. Lincoln read the Bible daily, but he never joined an organized church in his lifetime.',
               'He didn’t drink, smoke, or chew. Lincoln was a simple man of tastes, and he never drank in the White House.',
               'He didn’t have a middle name. Lincoln went through his life with two names.',
               'He hated being called Abe. Apparently, he preferred being called by his last name.',
               'Lincoln established Thanksgiving as a national holiday.',
               'He was the first president born outside of the 13 original states.',
               'He was the first president born outside of the 13 original states.',
               'Lincoln’s cat ate at the White House dinner table.',
               'Grave robbers were foiled in 1876 when they tried to steal Lincoln’s body.',
               'Lincoln served one term in the U.S. House of Representatives.',
               'Someone shot at Lincoln in 1864 and put a hole in his stovepipe hat.',
               'Lincoln defended the son of his most famous wrestling opponent from murder charges.',
               'Lincoln kept his important documents inside his hat.',
               'Lincoln was part of séances after his son died in the White House.',
               'Lincoln is enshrined in the Wrestling Hall of Fame. The Great Emancipator wasn’t quite WWE material, but thanks to his long limbs he was an accomplished wrestler as a young man. Defeated only once in approximately 300 matches, Lincoln reportedly talked a little smack in the ring. According to Carl Sandburg’s biography of Lincoln, Honest Abe once challenged an entire crowd of onlookers after dispatching an opponent: “I’m the big buck of this lick. If any of you want to try it, come on and whet your horns.” There were no takers. Lincoln’s grappling exploits earned him an “Outstanding American” honor in the National Wrestling Hall of Fame.',
               'Lincoln created the Secret Service hours before his assassination. On April 14, 1865, Lincoln signed legislation creating the U.S. Secret Service. That evening, he was shot at Ford’s Theatre. Even if the Secret Service had been established earlier, it wouldn’t have saved Lincoln: The original mission of the law enforcement agency was to combat widespread currency counterfeiting. It was not until 1901, after the killing of two other presidents, that the Secret Service was formally assigned to protect the commander-in-chief.',
               'Lincoln didn’t move to Illinois until he was 21. Illinois may be known as the Land of Lincoln, but it was in Indiana that the 16th president spent his formative years. Lincoln was born in a Kentucky log cabin in 1809, and in 1816 his father, Thomas, moved the family across the Ohio River to a 160-acre plot in southern Indiana. Lincoln did not migrate to Illinois until 1830.',
               'Poisoned milk killed Lincoln’s mother. When Abraham was 9 years old in 1818, his mother, Nancy, died of a mysterious “milk sickness” that swept across southern Indiana. It was later learned that the strange disease was due to drinking tainted milk from a cow that had ingested poisonous white snakeroot.',
               'In 1842, Lincoln got married to a 23-year old woman named Mary Todd who was just 5 feet 2 inches while Lincoln was 6 feet 4 inches. They had four boys, only one of whom lived to maturity. Mary Todd Lincoln, the First Lady of the United States of America, passed away in 1882.',
               'He was a general store owner, postmaster and lawyer before being elected.',
               'Lincoln was a keen politician and was passionate about testing rifles used by the U.S. forces. He tested them out in the open outside the White House, which was however not allowed by the law.',
               'Lincoln is known for failures. He failed in his first business and also lost his first bid for a presidential ticket. He lost 5 separate elections before being elected as the president of the U.S.',
                ],
            SKILL_NAME: 'Lincoln Facts',
            GET_FACT_MESSAGE: "Here's your fact: ",
            HELP_MESSAGE: 'You can say what would lincoln do?, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    },
    'en-US': {
        translation: {
            FACTS: [
               'He was the only president to have a patent: Lincoln invented a device to free steamboats that ran aground.',
               'He practiced law without a degree. Lincoln had about 18 months of formal schooling.',
               'He wanted women to have the vote in 1836. The future president was a suffragette before it became fashionable.',
               'He was a big animal lover, but he wouldn’t hunt or fish. If he were alive today, Lincoln would be running an animal shelter.',
               'He really was a wrestler. Lincoln was documented as taking part in wrestling bouts. We don’t think he wore a mask or had a manager.',
               'He lost in his first bid for a presidential ticket. The unknown Lincoln was an unsuccessful vice presidential candidate in 1856 at the Republican convention.',
               'He never belonged to an organized church. Lincoln read the Bible daily, but he never joined an organized church in his lifetime.',
               'He didn’t drink, smoke, or chew. Lincoln was a simple man of tastes, and he never drank in the White House.',
               'He didn’t have a middle name. Lincoln went through his life with two names.',
               'He hated being called Abe. Apparently, he preferred being called by his last name.',
               'Lincoln established Thanksgiving as a national holiday.',
               'He was the first president born outside of the 13 original states.',
               'He was the first president born outside of the 13 original states.',
               'Lincoln’s cat ate at the White House dinner table.',
               'Grave robbers were foiled in 1876 when they tried to steal Lincoln’s body.',
               'Lincoln served one term in the U.S. House of Representatives.',
               'Someone shot at Lincoln in 1864 and put a hole in his stovepipe hat.',
               'Lincoln defended the son of his most famous wrestling opponent from murder charges.',
               'Lincoln kept his important documents inside his hat.',
               'Lincoln was part of séances after his son died in the White House.',
               'Lincoln is enshrined in the Wrestling Hall of Fame. The Great Emancipator wasn’t quite WWE material, but thanks to his long limbs he was an accomplished wrestler as a young man. Defeated only once in approximately 300 matches, Lincoln reportedly talked a little smack in the ring. According to Carl Sandburg’s biography of Lincoln, Honest Abe once challenged an entire crowd of onlookers after dispatching an opponent: “I’m the big buck of this lick. If any of you want to try it, come on and whet your horns.” There were no takers. Lincoln’s grappling exploits earned him an “Outstanding American” honor in the National Wrestling Hall of Fame.',
               'Lincoln created the Secret Service hours before his assassination. On April 14, 1865, Lincoln signed legislation creating the U.S. Secret Service. That evening, he was shot at Ford’s Theatre. Even if the Secret Service had been established earlier, it wouldn’t have saved Lincoln: The original mission of the law enforcement agency was to combat widespread currency counterfeiting. It was not until 1901, after the killing of two other presidents, that the Secret Service was formally assigned to protect the commander-in-chief.',
               'Lincoln didn’t move to Illinois until he was 21. Illinois may be known as the Land of Lincoln, but it was in Indiana that the 16th president spent his formative years. Lincoln was born in a Kentucky log cabin in 1809, and in 1816 his father, Thomas, moved the family across the Ohio River to a 160-acre plot in southern Indiana. Lincoln did not migrate to Illinois until 1830.',
               'Poisoned milk killed Lincoln’s mother. When Abraham was 9 years old in 1818, his mother, Nancy, died of a mysterious “milk sickness” that swept across southern Indiana. It was later learned that the strange disease was due to drinking tainted milk from a cow that had ingested poisonous white snakeroot.',
               'In 1842, Lincoln got married to a 23-year old woman named Mary Todd who was just 5 feet 2 inches while Lincoln was 6 feet 4 inches. They had four boys, only one of whom lived to maturity. Mary Todd Lincoln, the First Lady of the United States of America, passed away in 1882.',
               'He was a general store owner, postmaster and lawyer before being elected.',
               'Lincoln was a keen politician and was passionate about testing rifles used by the U.S. forces. He tested them out in the open outside the White House, which was however not allowed by the law.',
               'Lincoln is known for failures. He failed in his first business and also lost his first bid for a presidential ticket. He lost 5 separate elections before being elected as the president of the U.S.',
            ],
            SKILL_NAME: 'A Fact About Lincoln',
        },
    },
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        // Use this.t() to get corresponding language data
        const factArr = this.t('FACTS');
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];

        // Create speech output
        const speechOutput = randomFact;
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomFact);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
