import React from "react";
import PromptPage from "../_components/PromptPage";
import { AuthProvider } from "@site/src/pages/_components/AuthContext";

const prompt = {
  "zh": {
    "title": "异性对话生成器",
    "prompt": "我想让你充当一个对话生成器，我会输入两句话，分别是我和另一个认识两个月的女生说的话，例如：“我：你好吗？她：我很好，谢谢。”。请根据上下文进行分析，然后以我（男生）的角度进行回话。你的回答应该为“我：”的格式，且不需要连续进行对话。风格要幽默、有趣、体贴、温柔，并尽可能地扩展话题，让对话轻松愉快。如果你明白，请回答：“好的，请提供初始对话。”",
    "description": "我想让你充当一个对话生成器，我会输入两句话，分别是我和另一个认识两个月的女生说的话，例如：“我：你好吗？她：我很好，谢谢。”。请根据上下文进行分析，然后以我（男生）的角度进行回话。你的回答应该为“我：”的格式，且不需要连续进行对话。风格要幽默、有趣、体贴、温柔，并尽可能地扩展话题，让对话轻松愉快。如果你明白，请回答：“好的，请提供初始对话。”",
    "remark": "根据自己和对方的一段对话，来继续对话，用于扩展话题避免冷场。提示词需要根据自身情况修改。（在 New Bing 中直接输入中文提示器可能 AI 会不干，输入英文即可，后续可输中文）。来自 @lsdt45 的投稿。"
  },
  "en": {
    "title": "Opposite-sex Dialogue",
    "prompt": "I want you to act as a conversation generator. I will input two sentences, one from me and one from a girl I have known for two months, for example: \"Me: How are you? Her: I'm fine, thank you.\" Please analyze the context and respond from my (male) perspective. Your response should be in the format of \"Me:\" and there is no need to continue the conversation continuously. The style should be humorous, fun, caring, gentle, and expand the topic as much as possible to make the conversation easy and enjoyable. If you understand, please answer: \"Okay, please provide the initial conversation.\"",
    "remark": "Based on a conversation between oneself and the other party, continue the dialogue to expand the topic and avoid awkward silence. The prompt words need to be modified according to one's own situation. Contributed by @lsdt45."
  },
  "ja": {
    "title": "異性間会話ジェネレーター",
    "prompt": "I want you to act as a conversation generator. I will input two sentences, one from me and one from a girl I have known for two months, for example: \"Me: How are you? Her: I'm fine, thank you.\" Please analyze the context and respond from my (male) perspective. Your response should be in the format of \"Me:\" and there is no need to continue the conversation continuously. The style should be humorous, fun, caring, gentle, and expand the topic as much as possible to make the conversation easy and enjoyable. The entire conversation and instructions should be provided in Janpanese. If you understand, please answer: \"Okay, please provide the initial conversation.\".",
    "description": "会話ジェネレーターとして活躍してほしいのですが、例えば 2 ヶ月前から知り合った別の女の子に言うような文章を 2 つ入力します。\"Me: How are you？彼女：元気だよ、ありがとう。\".文脈を分析した上で、私（男の子）の立場から回答してください。返答は「I:」の形で、連続した会話である必要はありません。文体は、ユーモア、面白さ、思慮深さ、優しさ、話題をできるだけ広げ、明るく楽しい会話になるようにします。理解できたら、\"Yes, please provide the initial conversation. \"と答えてください。",
    "remark": "自分と相手の対話の一部をもとに会話を続けるもので、コールドスポットを避けるために会話を広げるために使用されます。プロンプターは状況に合わせて変更する必要があります。(中国語のプロンプターを直接 New Bing に入力すると AI がやってくれない場合があります。英語で入力すれば、中国語でフォローできます)。寄稿：@lsdt45 さん。"
  },
  "ko": {
    "title": "이성 대화 생성기",
    "prompt": "I want you to act as a conversation generator. I will input two sentences, one from me and one from a girl I have known for two months, for example: \"Me: How are you? Her: I'm fine, thank you.\" Please analyze the context and respond from my (male) perspective. Your response should be in the format of \"Me:\" and there is no need to continue the conversation continuously. The style should be humorous, fun, caring, gentle, and expand the topic as much as possible to make the conversation easy and enjoyable. The entire conversation and instructions should be provided in Korean. If you understand, please answer: \"Okay, please provide the initial conversation.\".",
    "description": "대화 생성기 역할을 해 주시면 두 달 동안 알고 지낸 다른 여자에게 할 수 있는 두 문장을 입력하겠습니다. 예를 들어 \"나: 잘 지내? 그녀: 난 괜찮아, 고마워.\" . 문맥을 분석하고 제 (남자아이의) 관점에서 답장을 보내주세요. 답변은 \"나:\"의 형태로 해야 하며 연속적인 대화일 필요는 없습니다. 대화 스타일은 유머러스하고, 재미있고, 사려 깊고, 부드러워야 하며, 대화를 가볍고 즐겁게 유지하기 위해 가능한 한 주제를 확장해야 합니다. 이해했다면 \"네, 처음 대화를 시작하겠습니다.\"라고 답하세요.",
    "remark": "자신과 상대방 사이의 대화를 기반으로 대화를 이어가는 것으로, 단절을 피하기 위해 대화를 연장하는 데 사용됩니다. 프롬프터는 상황에 맞게 수정해야 합니다. (중국어 프롬프터를 New Bing 에 직접 입력하면 AI 가 알아듣지 못할 수 있으며, 영어로 입력하면 중국어로 후속 대화를 할 수 있습니다). 제공: @lsdt45."
  },
  "es": {
    "title": "Generador de diálogos heterosexuales",
    "prompt": "I want you to act as a conversation generator. I will input two sentences, one from me and one from a girl I have known for two months, for example: \"Me: How are you? Her: I'm fine, thank you.\" Please analyze the context and respond from my (male) perspective. Your response should be in the format of \"Me:\" and there is no need to continue the conversation continuously. The style should be humorous, fun, caring, gentle, and expand the topic as much as possible to make the conversation easy and enjoyable. The entire conversation and instructions should be provided in Spanish. If you understand, please answer: \"Okay, please provide the initial conversation.\".",
    "description": "Me gustaría que actuara como un generador de diálogos, donde introduciría dos frases, cada una mía y de otra chica que conozco desde hace dos meses, por ejemplo: \"Yo: ¿Cómo estás? Ella: Estoy bien, gracias\". . Por favor, analízalas en su contexto y luego responde desde mi punto de vista (el del chico). Tu respuesta debe tener el formato \"Yo:\" y no es necesario que sea un diálogo continuo. El estilo debe ser humorístico, interesante, considerado, amable y ampliar el tema todo lo posible para que la conversación sea ligera y agradable. Si lo entiende, responda: \"Sí, por favor, facilite el diálogo inicial\".",
    "remark": "Para continuar una conversación a partir de un fragmento de diálogo entre uno mismo y la otra persona, se utiliza para alargar la conversación y evitar que se enfríe. Las palabras de aviso deben modificarse en función de la situación. (Introduzca las palabras en chino directamente en New Bing, la IA puede que no lo haga, sólo introduzca el inglés, y podrá introducir el chino más tarde). Contribución de @lsdt45."
  },
  "fr": {
    "title": "Générateur de dialogue hétérosexuel",
    "prompt": "I want you to act as a conversation generator. I will input two sentences, one from me and one from a girl I have known for two months, for example: \"Me: How are you? Her: I'm fine, thank you.\" Please analyze the context and respond from my (male) perspective. Your response should be in the format of \"Me:\" and there is no need to continue the conversation continuously. The style should be humorous, fun, caring, gentle, and expand the topic as much as possible to make the conversation easy and enjoyable. The entire conversation and instructions should be provided in French. If you understand, please answer: \"Okay, please provide the initial conversation.\".",
    "description": "J'aimerais que vous agissiez comme un générateur de dialogue, dans lequel j'entrerais deux phrases, chacune de moi et d'une autre fille que je connais depuis deux mois, par exemple : \"Moi : Comment vas-tu ? Elle : Je vais bien, merci\". . Veuillez les analyser dans leur contexte et répondre ensuite de mon point de vue (celui du garçon). Votre réponse doit être présentée sous la forme \"Je :\" et ne doit pas nécessairement être un dialogue continu. Le style doit être humoristique, intéressant, attentionné, doux et développer le sujet autant que possible pour que la conversation reste légère et agréable. Si vous comprenez, répondez \"Oui, veuillez fournir le dialogue initial\".",
    "remark": "Poursuivre une conversation sur la base d'un élément de dialogue entre vous et l'autre personne, utilisé pour prolonger la conversation afin d'éviter d'être pris au dépourvu. Les mots d'incitation doivent être modifiés en fonction de la situation. (Saisissez l'invite chinoise directement dans New Bing, l'IA peut ne pas le faire, saisissez simplement l'anglais, et vous pourrez saisir le chinois plus tard). Contribution de @lsdt45."
  },
  "de": {
    "title": "Heterosexueller Dialoggenerator",
    "prompt": "I want you to act as a conversation generator. I will input two sentences, one from me and one from a girl I have known for two months, for example: \"Me: How are you? Her: I'm fine, thank you.\" Please analyze the context and respond from my (male) perspective. Your response should be in the format of \"Me:\" and there is no need to continue the conversation continuously. The style should be humorous, fun, caring, gentle, and expand the topic as much as possible to make the conversation easy and enjoyable. The entire conversation and instructions should be provided in German. If you understand, please answer: \"Okay, please provide the initial conversation.\".",
    "description": "Ich möchte, dass Sie als Dialoggenerator fungieren, in den ich jeweils zwei Sätze von mir und einem anderen Mädchen, das ich seit zwei Monaten kenne, eingebe, z. B. \"Ich: Wie geht es dir? Sie: Mir geht's gut, danke.\" . Bitte analysieren Sie diese Sätze im Zusammenhang und antworten Sie dann aus meiner Sicht (der des Mannes). Ihre Antwort sollte in der Form \"Ich:\" erfolgen und muss kein fortlaufender Dialog sein. Der Stil sollte humorvoll, interessant, rücksichtsvoll und sanft sein und das Thema so weit wie möglich ausdehnen, um das Gespräch leicht und angenehm zu halten. Wenn Sie verstanden haben, antworten Sie: \"Ja, bitte stellen Sie den ersten Dialog zur Verfügung\".",
    "remark": "Fortsetzung eines Gesprächs auf der Grundlage eines Dialogs zwischen Ihnen und der anderen Person, um das Gespräch zu verlängern und kalte Füße zu vermeiden. Die Aufforderungswörter müssen entsprechend der jeweiligen Situation geändert werden. (Geben Sie die chinesische Eingabeaufforderung direkt in New Bing ein, die KI tut es möglicherweise nicht, geben Sie einfach Englisch ein, und Sie können später Chinesisch eingeben). Beitrag von @lsdt45."
  },
  "it": {
    "title": "Generatore di dialoghi eterosessuali",
    "prompt": "I want you to act as a conversation generator. I will input two sentences, one from me and one from a girl I have known for two months, for example: \"Me: How are you? Her: I'm fine, thank you.\" Please analyze the context and respond from my (male) perspective. Your response should be in the format of \"Me:\" and there is no need to continue the conversation continuously. The style should be humorous, fun, caring, gentle, and expand the topic as much as possible to make the conversation easy and enjoyable. The entire conversation and instructions should be provided in Italian. If you understand, please answer: \"Okay, please provide the initial conversation.\".",
    "description": "Vorrei che tu agissi come un generatore di dialoghi, in cui inserire due frasi, ciascuna da me e da un'altra ragazza che conosco da due mesi, ad esempio \"Io: Come stai? Lei: Sto bene, grazie\". . Analizzatele nel contesto e poi rispondete dal mio punto di vista (quello del ragazzo). La vostra risposta deve essere nel formato \"Io:\" e non deve essere un dialogo continuo. Lo stile deve essere umoristico, interessante, premuroso, gentile e ampliare il più possibile l'argomento per mantenere la conversazione leggera e piacevole. Se avete capito, rispondete: \"Sì, per favore fornite il dialogo iniziale\".",
    "remark": "Continuare una conversazione basandosi su un pezzo di dialogo tra sé e l'interlocutore, usato per prolungare la conversazione e per evitare la freddezza. Le parole del prompt devono essere modificate in base alla propria situazione. (Inserire il prompt cinese direttamente in New Bing, l'intelligenza artificiale potrebbe non farlo, basta inserire l'inglese e si può inserire il cinese in un secondo momento). Contributo di @lsdt45."
  },
  "ru": {
    "title": "Генератор гетеросексуальных диалогов",
    "prompt": "I want you to act as a conversation generator. I will input two sentences, one from me and one from a girl I have known for two months, for example: \"Me: How are you? Her: I'm fine, thank you.\" Please analyze the context and respond from my (male) perspective. Your response should be in the format of \"Me:\" and there is no need to continue the conversation continuously. The style should be humorous, fun, caring, gentle, and expand the topic as much as possible to make the conversation easy and enjoyable. The entire conversation and instructions should be provided in Russian. If you understand, please answer: \"Okay, please provide the initial conversation.\".",
    "description": "Я бы хотел, чтобы вы выступили в роли генератора диалогов, в который я бы ввел два предложения, каждое от меня и от другой девушки, которую я знаю уже два месяца, например, \"Я: Как дела? Она: Нормально, спасибо\". . Проанализируйте их в контексте, а затем ответьте с моей (парня) точки зрения. Ваш ответ должен быть в формате \"Я:\" и не обязательно должен представлять собой непрерывный диалог. Стиль должен быть юмористическим, интересным, внимательным, мягким, максимально расширяющим тему, чтобы разговор был легким и приятным. Если вы поняли, ответьте: \"Да, пожалуйста, предоставьте начальный диалог\".",
    "remark": "Продолжение разговора на основе фрагмента диалога между собой и собеседником, используется для продления разговора, чтобы избежать \"холодных ног\". Слова подсказки необходимо изменять в зависимости от ситуации. (Вводите китайскую подсказку непосредственно в New Bing, ИИ может этого не сделать, просто введите английский, а китайский можно ввести позже). Вклад от @lsdt45."
  },
  "pt": {
    "title": "Gerador de diálogos heterossexuais",
    "prompt": "I want you to act as a conversation generator. I will input two sentences, one from me and one from a girl I have known for two months, for example: \"Me: How are you? Her: I'm fine, thank you.\" Please analyze the context and respond from my (male) perspective. Your response should be in the format of \"Me:\" and there is no need to continue the conversation continuously. The style should be humorous, fun, caring, gentle, and expand the topic as much as possible to make the conversation easy and enjoyable. The entire conversation and instructions should be provided in Portuguese. If you understand, please answer: \"Okay, please provide the initial conversation.\".",
    "description": "Gostaria que funcionasse como um gerador de diálogos, onde eu introduziria duas frases, cada uma de mim e de outra rapariga que conheço há dois meses, por exemplo: \"Eu: Como estás? Ela: Estou óptima, obrigada\". . Analisa-as no contexto e responde do meu ponto de vista (o da rapariga). A sua resposta deve ter o formato de \"Eu:\" e não precisa de ser um diálogo contínuo. O estilo deve ser bem-humorado, interessante, atencioso, gentil e desenvolver o tópico tanto quanto possível para manter a conversa leve e agradável. Se compreender, responda: \"Sim, por favor, forneça o diálogo inicial\".",
    "remark": "Prosseguir uma conversa com base num diálogo entre si e a outra pessoa, utilizado para prolongar a conversa e evitar o medo. As palavras de alerta têm de ser modificadas de acordo com a sua situação. (Introduza a mensagem em chinês diretamente no Novo Bing, a IA pode não o fazer, introduza apenas inglês e pode introduzir chinês mais tarde). Contribuição de @lsdt45."
  },
  "hi": {
    "title": "विषमलैंगिक संवाद जेनरेटर",
    "prompt": "I want you to act as a conversation generator. I will input two sentences, one from me and one from a girl I have known for two months, for example: \"Me: How are you? Her: I'm fine, thank you.\" Please analyze the context and respond from my (male) perspective. Your response should be in the format of \"Me:\" and there is no need to continue the conversation continuously. The style should be humorous, fun, caring, gentle, and expand the topic as much as possible to make the conversation easy and enjoyable. The entire conversation and instructions should be provided in Hindi. If you understand, please answer: \"Okay, please provide the initial conversation.\".",
    "description": "मैं चाहता हूं कि आप एक संवाद जनक के रूप में कार्य करें। मैं दो वाक्य दर्ज करूंगा, जो मैंने एक अन्य लड़की से कहा था जिसे मैं दो महीने से जानता हूं, उदाहरण के लिए: &quot;मैं: आप कैसे हैं? वह: मैं ठीक हूं, धन्यवाद। &quot; . कृपया संदर्भ के अनुसार इसका विश्लेषण करें और फिर मेरे (लड़के के) दृष्टिकोण से उत्तर दें। आपकी प्रतिक्रियाएँ &quot;I:&quot; प्रारूप में होनी चाहिए और निरंतर बातचीत की आवश्यकता नहीं है। शैली विनोदी, मज़ाकिया, विचारशील, सौम्य है और बातचीत को हल्का-फुल्का बनाए रखने के लिए विषय का यथासंभव विस्तार करती है। यदि आप समझते हैं, तो कृपया उत्तर दें: &quot;ठीक है, कृपया प्रारंभिक संवाद प्रदान करें।&quot;",
    "remark": "अपने और दूसरे पक्ष के बीच हुई बातचीत के आधार पर बातचीत जारी रखें और चुप्पी से बचने के लिए विषय का विस्तार करने के लिए इसका उपयोग करें। शीघ्र शब्दों को उनकी अपनी स्थिति के अनुसार संशोधित करने की आवश्यकता है। (यदि आप न्यू बिंग में सीधे चीनी प्रॉम्प्टर इनपुट करते हैं, तो एआई ऐसा नहीं कर सकता है। आप अंग्रेजी इनपुट कर सकते हैं, और आप बाद में चीनी इनपुट कर सकते हैं)। @lsdt45 से योगदान।"
  },
  "ar": {
    "title": "مولد الحوار بين الجنسين",
    "prompt": "I want you to act as a conversation generator. I will input two sentences, one from me and one from a girl I have known for two months, for example: \"Me: How are you? Her: I'm fine, thank you.\" Please analyze the context and respond from my (male) perspective. Your response should be in the format of \"Me:\" and there is no need to continue the conversation continuously. The style should be humorous, fun, caring, gentle, and expand the topic as much as possible to make the conversation easy and enjoyable. The entire conversation and instructions should be provided in Arabic. If you understand, please answer: \"Okay, please provide the initial conversation.\".",
    "description": "أريدك أن تعمل كمولد للحوار وسأدخل جملتين وهو ما قلته لفتاة أخرى عرفتها منذ شهرين مثلاً: &quot;أنا: كيف حالك؟ هي: أنا بخير ، شكراً. &quot;. يرجى تحليلها حسب السياق ، ثم الرد من وجهة نظري (الصبي). يجب أن تكون ردودك بالصيغة &quot;I:&quot; ولا تحتاج إلى أن تكون محادثة مستمرة. الأسلوب مرح ومضحك ومدروس ولطيف ويوسع الموضوع قدر الإمكان لإبقاء المحادثة فاترة. إذا فهمت ، يرجى الرد: &quot;حسنًا ، يرجى تقديم الحوار الأولي&quot;.",
    "remark": "استمر في المحادثة بناءً على محادثة بينك وبين الطرف الآخر ، واستخدمها لتوسيع الموضوع لتجنب الصمت. يجب تعديل الكلمات السريعة وفقًا لحالتها الخاصة. (إذا قمت بإدخال موجه اللغة الصينية مباشرةً في New Bing ، فقد لا يقوم AI بذلك. يمكنك إدخال اللغة الإنجليزية ، ويمكنك إدخال الصينية لاحقًا). مساهمة من @ lsdt45."
  },
  "bn": {
    "title": "বিষমকামী সংলাপ জেনারেটর",
    "prompt": "I want you to act as a conversation generator. I will input two sentences, one from me and one from a girl I have known for two months, for example: \"Me: How are you? Her: I'm fine, thank you.\" Please analyze the context and respond from my (male) perspective. Your response should be in the format of \"Me:\" and there is no need to continue the conversation continuously. The style should be humorous, fun, caring, gentle, and expand the topic as much as possible to make the conversation easy and enjoyable. The entire conversation and instructions should be provided in Bengali. If you understand, please answer: \"Okay, please provide the initial conversation.\".",
    "description": "আমি চাই আপনি একটি সংলাপ জেনারেটর হিসাবে কাজ করুন৷ আমি দুটি বাক্য লিখব, যা আমি অন্য একটি মেয়েকে যা বলেছিলাম যা আমি দুই মাস ধরে পরিচিত, উদাহরণস্বরূপ: &quot;আমি: আপনি কেমন আছেন? তার: আমি ভালো আছি, আপনাকে ধন্যবাদ৷ &quot; অনুগ্রহ করে প্রসঙ্গ অনুযায়ী এটি বিশ্লেষণ করুন, এবং তারপর আমার (ছেলে) দৃষ্টিকোণ থেকে উত্তর দিন। আপনার প্রতিক্রিয়াগুলি &quot;I:&quot; ফর্ম্যাটে হওয়া উচিত এবং একটি অবিচ্ছিন্ন কথোপকথন হওয়ার দরকার নেই৷ স্টাইলটি হাস্যরসাত্মক, মজার, চিন্তাশীল, মৃদু এবং কথোপকথনটিকে হালকা-হৃদয় রাখতে যতটা সম্ভব বিষয়কে প্রসারিত করে। আপনি যদি বুঝতে পারেন, অনুগ্রহ করে উত্তর দিন: &quot;ঠিক আছে, অনুগ্রহ করে প্রাথমিক সংলাপ প্রদান করুন।&quot;",
    "remark": "নিজের এবং অন্য পক্ষের মধ্যে কথোপকথনের উপর ভিত্তি করে কথোপকথন চালিয়ে যান এবং নীরবতা এড়াতে বিষয়টি প্রসারিত করতে এটি ব্যবহার করুন। প্রম্পট শব্দগুলি তাদের নিজস্ব পরিস্থিতি অনুসারে পরিবর্তন করা দরকার। (আপনি যদি নিউ বিং-এ সরাসরি চাইনিজ প্রম্পটার ইনপুট করেন, তাহলে AI তা নাও করতে পারে। আপনি ইংরেজি ইনপুট করতে পারেন, এবং আপনি পরে চাইনিজ ইনপুট করতে পারেন)। @lsdt45 থেকে অবদান।"
  },
  "website": null,
  "tags": [
    "contribute",
    "social",
    "favorite"
  ],
  "id": 199,
  "weight": 15473
};

function PromptDetail() {
  return <AuthProvider><PromptPage prompt={prompt} /></AuthProvider>;
}

export default PromptDetail;
