var sethighlight = function(e) {
  var hash=location.hash == '' ? '#' : location.hash

  $('#nav a').each(function() {
    var link=$(this)
    link[ link.attr('href') === hash ? 'addClass' : 'removeClass' ]('selected')
  })

  var tag='main-'+hash.replace(/^\#/,'')
  $('main').each(function() {
    var section=$(this)
    section[ section.attr('id')===tag ? 'addClass': 'removeClass' ]('active')
  })
}

$( window ).on( 'hashchange', sethighlight);
$( window ).on( 'load', sethighlight )


var phdstudents=[
  ["Ahmad Aljanaideh","CSE, December '21","Co-advised with Marie Catherine de Marneffe","Assistant Professor, Bentley University","https://www.linkedin.com/in/ahmad-aljanaideh-60a714126/","https://scholar.google.com/citations?user=puwSemMAAAAJ&hl=en&oi=ao"],
  ["Deblin Bagchi","CSE, December '19","","Speech Scientist, Solventum","https://www.linkedin.com/in/deblin-bagchi-abbb5124/","https://scholar.google.com/citations?user=LAIkmDUAAAAJ&hl=en&oi=ao"],
  ["Shuaichen Chang","CSE, August '23","","Applied Scientist, Amazon AWS AI","https://www.linkedin.com/in/shuaichen-chang-28b90790/","https://scholar.google.com/citations?user=enrSEP4AAAAJ&hl=en&oi=ao"],
  ["Manirupa Das","CSE, October '19","Co-advised with Rajiv Ramnath","Senior Data Scientist, Home Depot","https://www.linkedin.com/in/manirupa-das-21a3301/","https://scholar.google.com/citations?user=xeGA6i4AAAAJ&hl=en&oi=ao"],
  ["William Hartmann","CSE, June '12","","Senior Scientist, Raytheon BBN Technnologies","https://www.linkedin.com/in/william-hartmann-87302696","https://scholar.google.com/citations?hl=en&user=CH32p6AAAAAJ"],
  ["Yanzhang (Ryan) He","CSE, May '15","","Senior Staff Software Engineer, Google","https://www.linkedin.com/in/yanzhang-he-1072a211","https://scholar.google.com/citations?hl=en&user=2JH-fJYAAAAJ"],
  ["Ilana Heintz","Linguistics, June '10","Co-advised with Chris Brew","Strategist, Synoptic Engineering","https://www.linkedin.com/in/ilana-heintz-50a32b2/",""],
  ["Preethi Jyothi","CSE, August '13","","Associate Professor, IIT Bombay","https://www.cse.iitb.ac.in/~pjyothi/","https://scholar.google.com/citations?user=QN_uhu8AAAAJ&hl=en&oi=ao"],
  ["Joo Kyung Kim","CSE, August '17","","Senior Applied Scientist, Amazon AGI","https://supakjk.github.io/","https://scholar.google.com/citations?hl=en&user=SeRGQv4AAAAJ"],
  ["Chaitanya Kulkarni","CSE, December '21","Co-advisor; primary advisor Raghu Machiraju","AI ML Scientist, PayPal","https://www.linkedin.com/in/chaitanya2334/","https://scholar.google.com/citations?user=T6mf1-oAAAAJ&hl=en&oi=ao"],
  ["Yi Ma","CSE, August '15","","Software Engineer, Apple","https://www.linkedin.com/in/apmhbnms/","https://scholar.google.com/citations?hl=en&user=OFl1NkcAAAAJ"],
  ["Jeremy Morris","CSE, June '10","","Assistant Professor of Practice, Ohio State","http://www.cse.ohio-state.edu/~morrijer",""],
  ["Denis Newman-Griffis","CSE, May '20","","Senior Lecturer and Theme Lead in AI for Health (Associate Professor), University of Sheffield","https://www.linkedin.com/in/drgriffis/","https://scholar.google.com/citations?hl=en&user=Ymkp0TYAAAAJ"],
  ["David Palzer","CSE, August '25","","","https://www.linkedin.com/in/david-palzer-04397662/",""],
  ["Peter Plantinga","CSE May '21","","Postdoctoral Researcher with McGill, Concordia, and Mila", "https://www.linkedin.com/in/plantinga-peter/","https://scholar.google.com/citations?user=aBK72zwAAAAJ&hl=en&oi=ao"],
  ["Rohit Prabhavalkar","CSE, August '13","","Senior Staff Research Scientist, Google","https://www.linkedin.com/in/rohitprabhavalkar/","https://scholar.google.com/citations?hl=en&user=JgltxisAAAAJ"],
  ["Preethi Raghavan","CSE, April '14","Co-advised with Albert Lai","Vice President, NLP and Machine Learning, Fidelity Investments","https://www.linkedin.com/in/preethi-raghavan-26669a2","https://scholar.google.com/citations?hl=en&user=oPolPeMAAAAJ"],
  ["Anton Rytting","Linguistics, December '06","Co-advised with Chris Brew","Associate Research Scientist, Applied Research Lab for Intelligence &amp; Security, U. Maryland","https://www.cs.umd.edu/people/crytting","https://scholar.google.com/citations?hl=en&user=iBiZjx0AAAAJ"],
  ["Prashant Serai","CSE, May '20","","Staff Research Scientist, Sanas","https://www.linkedin.com/in/prashant-serai-28391618/","https://scholar.google.com/citations?user=ORJJGWoAAAAJ&hl=en&oi=ao"],
  ["Chaitanya Shivade","CSE, May '16","Co-advised with Albert Lai","Senior Applied Scientist, Amazon","https://www.linkedin.com/in/cshivade/","https://scholar.google.com/citations?user=7H0YYPIAAAAJ&hl=en&oi=ao"],
  ["Vishal Sunder","CSE, Feb '25","","IBM","https://www.linkedin.com/in/vishal-sunder-11a2a4193/",""],    
  ["Adam Stiff","CSE, May '20","","Principal Scientist, Cognitive Systems Engineering, DCS Corp","https://www.linkedin.com/in/adam-stiff-6a134646/",""],
  ["Tim Weale","CSE, August '10","Co-advised with Chris Brew","Technical Manager, Department of Defense","https://www.linkedin.com/in/timothyweale/",""],
  ["Sirui Xu","CSE, August '18","","Senior Research Scientist II, PAII Research Lab","https://www.linkedin.com/in/sirui-xu-91a02622/",""]
];

var currentstudents=[
  ["Erika Goetz","CSE","","","https://www.linkedin.com/in/erikagoetz/",""],
  ["Amad Hussain","CSE","","","https://www.linkedin.com/in/syed-amad-hussain-b94008b7/",""],
  ["Jaylen Jones","CSE","Co-advised with Huan Sun","","https://www.linkedin.com/in/jaylen--jones/"],
  ["Kevin Krahn","CSE","","",""],
  ["Hansol Lee","CSE","","","https://www.linkedin.com/in/sol5004/"]
]

var postdocs=[
  ["Andrew Plummer","CSE/Linguistics","","Data Scientist, Northrup Grumman","https://www.linkedin.com/in/arplummer/","https://scholar.google.com/citations?hl=en&user=yzfZw-sAAAAJ&view_op=list_works"]
]

var msbsstudents=[
  ["Pulkit Arya","CSE MS May '23","Co-advised with Mike White","JPMorgan Chase","https://www.linkedin.com/in/pulkit-arya-037/"],
  ["Adriane Boyd", "CSE MS June '08", "(completed Linguistics Ph.D. December '11 on a different topic)","","http://www.sfs.uni-tuebingen.de/~adriane/", ""],
  ["Meghan Day", "CSE MS May '17", "", "Google", "https://www.linkedin.com/in/meghan-day/", ""],
  ["Akshay Deshpande", "CSE MS August '13", "", "Soothsayer Analytics", "https://www.linkedin.com/in/akshaydesh", ""],
  ["Smriti Dua", "CSE MS May '15", "", "Cisco", "https://www.linkedin.com/in/smrite-dua", ""],
  ["Beulah Karrolla","CSE May '24","","Amazon","https://www.linkedin.com/in/beulah-karrolla/"],
  ["Jialin Li","CSE MS May '21","(completed Geography Ph.D., Advisor: Ningchuan Xiao)","Epsilon","https://www.linkedin.com/in/jialin-li-908058181/",""],
  ["Jacob Mainzer", "CSE MS December '11", "", "", "https://www.linkedin.com/in/jacob-mainzer-4057a940", ""],
  ["Prateeti Mohapatra", "CSE, MS March '09", "", "IBM Research Lab", "http://www.linkedin.com/pub/prateeti-mohapatra/1a/b80/29", ""],
  ["Monica Rajamanohar", "ECE, MS August '05", "", "Heiler Software", "http://www.linkedin.com/pub/monica-rajamanohar/6/a0/95b", ""],
  ["Tony Ramierez","CSE, MS May '24","","","https://www.linkedin.com/in/tony-p-ramirez/",""],
  ["Louis (Yuanlong) Shao", "CSE, MS May '14", "", "Two Sigma", "https://www.linkedin.com/in/louis-yuanlong-shao-35179b15/",""],
  ["Darla Shockley", "CSE, MS March '10", "", "Fly.io", "https://www.linkedin.com/in/darlashockley", ""],
  ["Ritu Singh", "CSE, MS August '12", "", "JPMorgan Chase",  "https://www.linkedin.com/in/singh27"],
  ["Qi Song", "CSE, MS May '20", "", "Ph.D. Student, Instutue of Software, Chinese Academy of Science", "https://www.linkedin.com/in/qi-song-8197421a1/", ""],
  ["Bharat Suri","CSE","MS May '21","","Salesforce","https://www.linkedin.com/in/bsuri/",""],
  ["Yu Wang", "CSE, MS March '07", "", "" ,"" , ""],
  ["Lavanya Venkatasubramaniam","CSE","MS December '22","","Microsoft","https://www.linkedin.com/in/lavanya-vvs/"], 
  ["Annatala Wolf",  "CSE BS honors '06", "", "Ohio State CSE Lecturer", "http://www.cse.ohio-state.edu/~wolfann", ""]
]

var cardify=function(studentarray,element,linkmsg='Link',linkmsg2='Google Scholar') {
  studentarray.forEach(function(s) {
    var interior='<div class="card"><div class="card-body"><h5 class="card-title">'+s[0]+'</h5><h6 class="card-subtitle mb-2 text-muted">'+s[1]+'</h6>'
    if (s[2]!='') { interior +='<div class="text-muted">'+s[2]+'</div>' }
    if (s[3]!='') { interior +='<div class="text-muted">'+s[3]+'</div>' }
    if (s[4]!='') { interior +='<a href="'+s[4]+'" class="card-link">'+linkmsg+'</a>' }
    if (s[5]!='') { interior +='<a href="'+s[5]+'" class="card-link">'+linkmsg2+'</a>' }
    interior +='</div></div>'
    $(element).append(interior)
  })
}
cardify(phdstudents,'#phdstudents','Link')
cardify(currentstudents,'#currentstudents','Link'),
cardify(postdocs,'#postdocs','Link')
cardify(msbsstudents,"#msbsstudents",'Link')

var classes=[
  ["Artificial Intelligence I: Basic Techniques", "CSE 3521", "Last taught: Spring 2009","", "http://coe-portal.cse.ohio-state.edu/pdf-exports/CSE/CSE-3521.pdf", ""],
  ["Survey of Artificial Intelligence II: Advanced Techniques", "CSE 5522", "Last taught: Autumn 2019","", "http://coe-portal.cse.ohio-state.edu/pdf-exports/CSE/CSE-5522.pdf",""],
  ["Artificial Intelligence", "CSE 6521", "Last taught: Autumn 2020","", "http://coe-portal.cse.ohio-state.edu/pdf-exports/CSE/CSE-6521.pdf",""],
  ["Foundations of Speech and Language Processing", "CSE 5525", "Last taught: Spring 2021", "", "http://coe-portal.cse.ohio-state.edu/pdf-exports/CSE/CSE-5525.pdf","" ],
  ["Introduction to Neural Networks", "CSE 5526","Last taught: Spring 2022","","http://coe-portal.cse.ohio-state.edu/pdf-exports/CSE/CSE-5526.pdf",""],
  ["Intermediate Studies in Artificial Intelligence (Seminar)", "CSE 5539","Last taught: Spring 2023", "", "http://coe-portal.cse.ohio-state.edu/pdf-exports/CSE/CSE-5539.pdf",""],
  ["Capstone Design: Knowledge-Based Systems","CSE 5914","Last taught: Spring 2016","","http://coe-portal.cse.ohio-state.edu/pdf-exports/CSE/CSE-5914.pdf",""]
]  

var resources=[
  ["Convolution demo", "Google Colab/Jyupter Notebook", "CSE 5526", '<img class="card-img" src="img/convolutioncolab.png"></img>', "https://colab.research.google.com/drive/1SdsSNj_AmyajG5QTknOeQCiEdSMI6zZq?usp=sharing", ""],
  ["Build an SVM demo", "Google Colab/Jyupter Notebook", "CSE 5526", '<img class="card-img" src="img/svmcolab.png"></img>', "https://colab.research.google.com/drive/12IpcPrubBlxkx5wPyRd9O1e-d59nyQs8?usp=sharing", ""],
  ["Pytorch Intro for Neural Networks", "Google Colab/Jyupter Notebook", "CSE 5526", '<img class="card-img" src="img/pytorchnncolab.png"></img>', "https://colab.research.google.com/drive/1Z-fJwfiABcsbMuv-mX51wR_6D1QFKaYu?usp=sharing", ""],
  ["K-Means demo", "Google Colab/Jyupter Notebook","CSE 5526",'<img class="card-img" src="img/kmeanscolab.png"></img>', "https://colab.research.google.com/drive/1gOWOnMuatux-Q_v3WD1tFCK_L5t9Riax?usp=sharing",""],
  ["Function fitting", "Google Colab/Jyupter Notebook", "CSE 5526", '<img class="card-img" src="img/functionfitcolab.png"></img>', "https://colab.research.google.com/drive/1lEPTXSHrdxjtBSEaT1GozCrnxzpuG5NE?usp=sharing", ""],
  ["Get to know you clustering", "GoogleColab/Jyupter Notebook", "CSE 5522/6521",'A method for forming groups by clustering answers based on a survey.  Mostly used to begin a discussion of fairness and bias (and bad algorithms) in AI.',"https://colab.research.google.com/drive/1nTGLKxr7Q53OmGyno2NJTAFoawKnC9Cz?usp=sharing",""],
  ["Naive Bayes Sentiment Analysis","GoogleColab/Jyupter Notebook","CSE 5522/6521",'<img class="card-img" src="img/nb.png"></img>Credit to Amir Asiaee for CSE 5522.',"https://colab.research.google.com/drive/1YL034mgUUVp5-hErl32Ac2CExhRvpxX8?usp=sharing",""],
  ["Percepton Learning Rule","MP4 Video","CSE 5522/5526",
    '<p>This demo shows the PLR learning a 2-dimensional hyperplane between two separable classes. The thing to note is that at convergence, the red line (hypothesis) does not match the true function (blue dashed line) -- the end hypothesis will depend on the training data.</p> <img src="img/plrmovie.png"></img>', 
    'movies/plr.mp4', ''],
  ["K-means demo","MP4 Video","CSE 5522",
    '<p>This older demo shows k-means clustering of 4 and 8 data clusters in 2 dimensions. I use this demo as a jumping off point to show that random initialization can lead to "incorrect" clusters. The first demo has 4 relatively separate data clusters, and k-means comes up with a pretty good clustering. The iterations first show a mean assignment, and then the data points are colored according to the closest mean. The iteration continues until convergence. The second movie shows the example with 8 means and a "bad" initialization. After 11 shots at initialization, I did get one that worked (demo 3). Someone in the class ususally picks up on the fact that the number of "clusters" and number of means are matched in the video, which can be used to generate a discussion of different techniques for finding the number of means.</p>'+
    '<img src="img/kmeansmovie.png"></img>','movies/kmeans.mp4',''],
  ["1-dimensional Gaussian EM demo","MP4 Video","CSE 5522",
    '<p>This demo shows learning of a 3-mixture of Gaussians over one dimensional data. I particularly like this demo because it shows how the means and variances evolve over EM iterations. The means are represented by the center of the line in each graph; the variance is represented by the width of the line. The data were generated by three overlapping Gaussians, and in this case the EM algorithm does recover the means and variances of the original generating functions pretty accurately.</p>'+
    '<img src="img/1dgaussmovie.png"></img>','movies/1dgauss.mp4',''],
  ["2-dimensional Gaussian EM demo","MP4 Video","CSE 5522",
    '<p>This is similar to the 1-d demo, but uses data that are 2-dimensional. I used diagonal covariance matrices here (I was too lazy to code up the full covariance version :-), but this also gives me the ability to talk about what happens if you use diagonal covariance matrices (notice the axis-parallel ellipsoids). This is a case where the EM algorithm does not converge to the same parameters that generated the data (pretty obvious in the movie). The particular algorithm I used here was to start by taking the global mean of the data, then splitting the Gaussian cloning the mean and perturbing it slightly and letting EM converge. I then iteratively split the each Gaussian, perturb, and let EM converge again. This is similar to some techniques used in speech recognition Gaussian modeling but is not the only way to do this.</p>'+
    '<img src="img/2dgaussmovie.png"></img>','movies/2dgauss.mp4','']
]

cardify(classes,'#classes','Syllabus')
cardify(resources,"#teachingresources",'Link')

var funstuff=[
  ["Music Diplomacy Maps","","", 
    "<p>I like to work with mapping software and created the maps and tour database interface for Danielle Fosler-Lussier's \"Music in America's Cold War Diplomacy\"</p>"+
    '<img src="img/musicdiplomacy.png"></img>','https://musicdiplomacy.org/database.html',''],
  ['Published musicologist! (Not really)',"","",
    '<p>As a result of the above work, Danielle and I wrote a blog article for Musicology Now.</p>',
    'http://www.musicologynow.org/2015/06/rethinking-historical-data-foray-into.html',''],
  ["Music on the Move Maps","","",
    "<p>The cool thing about having an awesome spouse who writes books about music and globalization is that you keep getting chances to play with maps.  I was glad that she asked me to work on the maps for <i>Music on the Move</i>, an open access book available (soon) at the University of Michigan Press.  I've open sourced the maps (which themselves built on various sources).</p>"+
    '<img src="img/motmmaps.jpg"></img>',
    "http://musiconthemove.org","https://github.com/efosler/MusicOnTheMove"],
  ["Scouting","","","<p>I volunteer with the Boy Scouts of America. And I like coffee.</p><img src='img/coffee.jpg'></img>",'',''],
  ["Cooking","","",'<p>I like to cook.</p><img src="img/peppers.png"></img><img src="img/frenchtoast.jpg"></img><img src="img/pie.jpg"></img>','','']
]

cardify(funstuff,'#funstuff','Link','GitHub')

var confmap={
  "1996 Large Vocabulary Continuous Speech Recognition Summer Research Workshop Technical Reports": ["TR","LVSCR"],
  "IEEE/ACM Workshop on Machine Learning in High Performance Computing Environments (MLHPC)": ["WK","MLHPC"],
  "Workshop on Representation Learning for NLP": ["WK","RepL4NLP"],
  "International Workshop on Spoken Dialog Systems": ["WK","IWSDS"],
  "ACL-IJCNLP Workshop on Collaboratively Constructed Semantic Resources": ["WK","CCSR"],
  "ACM SIGHIT International Health Informatics Symposium": ["CF","IHI"],
  "AMIA Annual Symposium": ["CF","AMIA"],
  "AMIA Joint Summits on Translational Science": ["CF","AMIA-TS"],
  "Association for Computational Linguistics": ["CF","ACL"],
  "AI Magazine": ["JR","AI Magazine"],
  "Chicago Linguistic Society": ["CF","CLS"],
  "Conversational Speech Recognition Workshop: DARPA Hub~5E Evaluation": ["WK","DARPA"],
  "DARPA Broadcast News Workshop": ["WK","DARPA"],
  "Empirical Methods in Natural Language Processing": ["CF","EMNLP"],
  "Empirical Methods in Natural Language Processing (System Demonstrations)": ["CF","EMNLP"],
  "Findings of EMNLP": ["CF","EMNLP Findings"],
  "Extra-Propositional Aspects of Meaning (ExProM) in Computational Linguistics Workshop": ["WK","ExProM"],
  "European Conference on Speech Communication and Technology": ["CF","Eurospeech"],
  "International Conference on Spoken Language Processing": ["CF","ICSLP"],
  "ISCA Tutorial and Research Workshop (ITRW) on Pronunciation Modeling and Lexicon Adaptation for Spoken Language Technology": ["WK","ITRW"],
  "ISCA Tutorial and Research Workshop on Speech Analysis and Processing for Knowledge Discovery": ["WK","ITRW"],
  "ESCA Tutorial and Research Workshop on Modeling Pronunciation Variation for Automatic Speech Recognition": ["WK","ITRW"],
  "International Conference on Acoustics, Speech, and Signal Processing": ["CF","ICASSP"],
  "International Conference on Acoustics, Speech and Signal Processing": ["CF","ICASSP"],
  "International Conference on Acoustics, Speech and Signal Processing (ICASSP)": ["CF","ICASSP"],
  "IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)": ["CF","ICASSP"],
  "International Conference on Computational Linguistics": ["CF","COLING"],
  "International Congress of Phonetic Sciences": ["CF","ICPHS"],
  "International Speech Communication Association (ICSA) Tutorial and Research Workshop on Speech Recognition and Intrinsic Variation": ["WK","ITRW"],
  "Interspeech": ["CF","Interspeech"],
  "Interspeech (Demo Session)": ["CF","Interspeech"],
  "Interspeech (Show and Tell Session)": ["CF","Interspeech"],
  "Annual Conference of the International Speech Communication Association": ["CF","Interspeech"],
  "ESCA Tutorial and Research Workshop on Modeling Pronunciation Variation for Automatic Speech Recognition": ["WK","ITRW"],
  "NAACL HLT Workshop on Predicting and Improving Text Readability for Target Reader Populations": ["WK","TextReadability"],
  "North American Association for Computational Linguistics": ["CF","NAACL-HLT"],
  "North American Association for Computational Linguistics - Human Language Technology Conference": ["CF","NAACL-HLT"],
  "Proceedings of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies": ["CF","NAACL-HLT"],
  "Workshop on Evaluating Vector Space Representations for NLP": ["WK","RepEval"],
  "International Conference on Language Resources and Evaluation": ["CF","LREC"],
  "International Workshop on Health Text Mining and Information Analysis": ["WK","LOUHI"],
  "IEEE International Conference on Semantic Computing": ["CF","ICSC"],
  "i2b2 Shared Task and Workshop: Challenges in Natural Language Processing for Clinical Data": ["WK","i2b2"],
  "Workshop on Innovative Use of NLP for Building Educational Applications": ["WK","BEA"],
  "The SIGDIAL Meeting on Discourse and Dialogue": ["CF","SIGDIAL"],
  "Workshop on Issues in Teaching Computational Linguistics": ["WK","TeachCL"],
  "Workshop on Biomedical Natural Language Processing": ["WK","BioNLP"],
  "IEEE Workshop on Automatic Speech Recognition and Understanding": ["WK","ASRU"],
  "IEEE Automatic Speech Recognition and Understanding Workshop": ["WK","ASRU"],
  "IEEE Workshop on Spoken Language Technology": ["WK","SLT"],
  "IEEE Workshop on Spoken Language Technology": ["WK","SLT"],
  "IEEE Spoken Language Technology Workshop (SLT)": ["WK","SLT"],
  "Workshop on Vector Space Modeling for NLP": ["WK","LatentVar"],
  "Annual Conference of the Association for the Advancement of Artificial Intelligence (AAAI)": ["CF","AAAI"],
  "Workshop on Speech Production in Automatic Speech Recognition": ["WK","SPASR"],
  "Symposium on Machine Learning in Speech and Language Processing (MLSLP)": ["WK", "MLSLP"],
  "Computer Speech and Language": ["JR", "CSL"],
  "Journal of Biomedical Informatics": ["JR", "JBI"],
  "Medical teacher": ["JR","MT"],
  "Medical Teacher": ["JR","MT"],
  "IEEE Signal Processing Magazine": ["JR","SPM"],
  "IEEE/ACM Transactions on Audio, Speech, and Language Processing": ["JR","TASLP"],
  "IEEE Transactions on Audio, Speech, and Language Processing": ["JR","TASLP"],
  "Situated Dialog in Speech-Based Human Computer Interaction": ["BK","Collection"],
  "Journal of the American Medical Informatics Association": ["JR", "JAMIA"],
  "Journal of American Medical Informatics Association": ["JR","JAMIA"],
  "Proceedings of the IEEE": ["JR","IEEE"],
  "Journal of Child Language": ["JR", "CL"],
  "IEEE Transactions on Multimedia": ["JR", "Multimedia"],
  "Ohio State University (Distributor)": ["OT", "OSU"],
  "Speech Communication": ["JR","SpeCom"],
  "Frontiers in Digital Health": ["JR","FDH"],
  "The Journal of the Acoustical Society of America": ["JR","JASA"],
  "ACL-IJCNLP": ["CF","ACL"],
  "arXiv preprint": ["CF","ArXiv"],
  "Table Representation Learning Workshop, NeurIPS Workshops": ["CF","NeurIPS Workshops"],
  "Natural Language Engineering": ["JR","NLE"],
  "North American Chapter of the Association for Computational Linguistics: Human Language Technologies: Demonstrations": ["CF", "NAACL Demos"]
};

var updatebib=function(bibentry) {

  var journal=$(bibentry).find('.journal').html()
  var booktitle=$(bibentry).find('.booktitle').html()
  var year=$(bibentry).find('.year').html()
  if (journal in confmap) {
    var abbrev=confmap[journal][1]

    $(bibentry).find('.venue').html(abbrev)
  }
  else if (booktitle in confmap) {
    var abbrev=confmap[booktitle][1]
    if (confmap[booktitle][0] != 'BK') {
      abbrev=abbrev+' '+year
    }

    $(bibentry).find('.venue').html(abbrev)
  }
  else if ($(bibentry).find('.title').html()==='Dynamic pronunciation models for automatic speech recognition') {
    $(bibentry).find('.venue').html('Dissertation')
  } else if (typeof $(bibentry).find('.note').html() !=='undefined' && $(bibentry).find('.note').html().startsWith("US Patent")) {
    $(bibentry).find('.venue').html('Patent')
  } else if ($(bibentry).find('.institution').html()!='') {
    $(bibentry).find('.venue').html('Other')
  }
}



