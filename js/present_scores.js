$(document).ready(function () {
  renderWinnerCards();
  renderParticipantCards();
});

const scores = [
  {
    Name: "Deepasri S",
    School: "SGP",
    Class: "7th",
    "Project URL":
      "https://drive.google.com/folderview?id=1irlA042zn8Ro7AWXHb4QshB8JCkcc_U6",
    "Project description":
      "About farmer.\nThey will produce food for us.\nThey are our god.",
    "Leaderboard Score %": 75.5,
    "Netlify Link": "https://deepasri.netlify.app/",
    "Participation Prize": "Yes",
    "Overall Score": 14,
    Complexity: 1,
    Creativity: 4,
    "Learning to learn": 0,
    Originality: 6,
    "Code Quality": 3,
    Remarks:
      "<p>The project has a good concept and has a coherent thought process behind it. </p><p>Complexity is fairly low. The project includes just one HTML file with internal stylesheet and very few CSS styling attributes are used. The content in the page is not formatted aesthetically. For instance, all the content is left-aligned and the different sections of the page are poorly differentiated. </p><p>The quality  of the code is not too strong. There is a lot of unused code left behind in the internal stylesheet. The HTML and CSS code don't seem to be formatted for readability.</p><p>Overall, a decent effort. Could have paid more attention to the rubric and spent more time in catering to it.</p>",
  },
  {
    Name: "Krishitha",
    School: "ERD",
    Class: "7th",
    "Project URL": "https://dazzling-yonath-ae1921.netlify.app/",
    "Project description":
      "My website is telling about Angkor Wat Temple . I attached a video and a photo in every page in my project.",
    "Leaderboard Score %": 95.4,
    "Netlify Link": "https://dazzling-yonath-ae1921.netlify.app/",
    "Participation Prize": "Yes",
    "Overall Score": 33,
    Complexity: 6,
    Creativity: 7,
    "Learning to learn": 7,
    Originality: 8,
    "Code Quality": 5,
    Remarks:
      "<p>The project is well-planned and has a coherent theme that the website sticks to. Everything works well and as intended. There are no obvious artefacts. </p><p>In terms of complexity, the website has several pages and contains embedded media and has various pieces of information related to the central theme. </p><p>The use of media is notable and the inclusion of videos in each page is good, although it has to be noted that all the pages are very similar in structure and there doesn't seem to be a lot of variation in the structure of each page. Although the home page says introduction, it doesn't really introduce the website to the user. It speaks more about the Angor Wat temple. </p><p>The use of iframe to include the videos hosted within Google Drive was not taught as part of the course. So the use of that technique is commendable.</p><p>The topic and the content and the information certainly displays originality. </p><p>Much of the code seems to be reused from the demo projects that are part of the course. But there isn't a lot of unused code and the use of classes and ids for styling is noteworthy. The code is not formatted for readability.</p>",
  },
  {
    Name: "M.Pushya",
    School: "SGP",
    Class: "7th",
    "Project URL": "https://rithikpushyatech.netlify.app",
    "Project description":
      "This website is about my youtube channel.\nI want to win this Competition and I will study Java script,Python    etc......and I will training some student like me as a volnteer and I show my website to the student I tell about this website like I created this in when I am studying 7th.\ni added Home page,Video page,About Page,Contact page,subscribe button,download button, audio,youtube video;images,",
    "Leaderboard Score %": 76.6,
    "Netlify Link": "https://rithikpushyatech.netlify.app/",
    "Participation Prize": "Yes",
    "Overall Score": 38,
    Complexity: 7,
    Creativity: 8,
    "Learning to learn": 6,
    Originality: 8,
    "Code Quality": 9,
    Remarks:
      "<p>The website is not only coherent but also is highly utilitarian in that it supports the student's need to have a website to support their YouTube channel. </p><p>In terms of complexity, the site is fairly complex. It has different pages and different kinds of content within it, some taught in class and some not. </p><p>In terms of creativity, there is a lot of small creative touches that highlight creative use of the coding skills. For instance, the little emoji on the home page and the animations at the bottom of some of the other pages etc offer a nice touch, other than the images and videos embedded throughout the page. The use of favicon is also noteworthy.</p><p>Many of the features included here weren't touched upon in the course. For instance, the use of favicon, the use of animations, the use of emojis in the page etc. And also it has to be noted that the student was quite active throughout the course in actively communicating and clearing theiir doubts. There was a display of enthusiasm for learning and applying new concepts.</p><p>In terms of originality, as noted earlier, a practical thought process behind the choice of topic can be observed and the contestent definitely has used the knowldge gained in the course and applied it in a practical real world context. However, the layout of each page is not very different from what was taught in the course. Some of the concepts regarding content and layout of the page are utilized directly from the course content.</p><p>The code is quite clean. The HTML and CSS files are formatted for readability, No unused code blocks were found. Overall, the code qaulity appeared to be high, certainly above average.</p>",
  },
  {
    Name: "M.Abhiniti",
    School: "ERD",
    Class: "8th",
    "Project URL":
      "https://drive.google.com/folderview?id=1-2X236Dsc6jubvqtM-JvqPxE8P-M-1J-",
    "Project description":
      "I have create a school website.I include school photos, videos etc...",
    "Leaderboard Score %": 89.7,
    "Netlify Link": "https://abhiniti.netlify.app/",
    "Participation Prize": "Yes",
    "Overall Score": 10,
    Complexity: 5,
    Creativity: 3,
    "Learning to learn": 0,
    Originality: 1,
    "Code Quality": 1,
    Remarks:
      "<p>Aside from very minor variations such as color scheme and the type of content, there isn't much different between this project and the demo project that was assigned as part of the course. </p><p>In terms of complexity, the project has multiple pages and incorporates external stylsheet. Some of the pages have custom background.The amount of content is also quite modest.</p><p>The project does seem to be coherent and stick to the core topic, but there is very little display of innovative use of what was learned in the course. Some of the images used appear to be screenshots rather than original images, which is not aesthetically appealing because of the distracting elements in the images. The video included is not really relevant to what the website is about. </p><p>As noted earlier, nothing aside from what was taught as part of the course is included in the project. </p><p>A lot of unused code is left in both the HTML and CSS files. There are also errors in pages where unnecessary content can be seen in the output. For instance the contact page has some useless text in the footer, which seems to be carelessly left behind. The code is also not formatted for readability. </p><p>Overall, an average project, but a great first attempt!</p>",
  },
  {
    Name: "S.A.Kanishka",
    School: "ERD",
    Class: "8th",
    "Project URL":
      "https://drive.google.com/folderview?id=1EnG9LuCwmpa8TARx6rD6XCKwG9FUMpuq",
    "Project description":
      "I had created about my school. I explained and gave some pictures for them.",
    "Leaderboard Score %": 92.9,
    "Netlify Link": "https://kanishkasa.netlify.app/",
    "Participation Prize": "Yes",
    "Overall Score": 14,
    Complexity: 3,
    Creativity: 3,
    "Learning to learn": 4,
    Originality: 2,
    "Code Quality": 2,
    Remarks:
      "<p>The project is not very different from the demo project that was assigned in the course. However, the execution is clean and the site looks coherent, with a few caveats. </p><p>In terms of complexity, aside from what was used in the course, there doesn't seem to be much done specifically for this project. A lot of features seem to be reused from the demo project in the cousre.</p><p>The use of images is above average. The use of tiled display of background image is a nice touch.</p><p>Use of tiled image background was not taught as part of the course and it's use counts as proof of effort to learn something outside of what is taught in class. </p><p>While the execution is clean, there isn't anything extraordinarily special about the project in terms of originality. It seems to be a modest attempt to display their web development skills. </p><p>Code quality is quite average. There are some obvious mistakes in that the school website should use an appropriate content for their footer instead of the name of the person designing the site, the top navigation layout seems to be differently styled for different pages, which is distracting. And the individual code pages are not formatted for readability and all the CSS seems to be using internal stylesheet, which is also overrun by a lot of unusesd code.</p>",
  },
  {
    Name: "R. Savitha",
    School: "SGP",
    Class: "7th",
    "Project URL":
      "https://drive.google.com/folderview?id=1JAaeKyfYjTL9AySbVyeXIqI9VGFBDeAS",
    "Project description":
      "My project contain the information of the bike yamaha FZ 25 this is useful for automobile students",
    "Leaderboard Score %": 78.4,
    "Netlify Link": "https://savitha.netlify.app/",
    "Participation Prize": "Yes",
    "Overall Score": 10,
    Complexity: 1,
    Creativity: 2,
    "Learning to learn": 0,
    Originality: 3,
    "Code Quality": 4,
    Remarks:
      "<p>Overall the project is a modest attempt to display their web development skills. </p><p>The project is not very complex. It is a single page HTML page with an external stylesheet.</p><p>Both in terms of the topic of the site and the amount of media used, this is a very modest attempt. The use of tabular format to show a lot of details about the topic is informative, if the topic is interesting to the user. The image used here could have been a bit bigger.</p><p>There is nothing used here that counts as proof of having learned something outside the course.</p><p>The topic of choice stands out from other submissions here, so it cannot be said that there is no originality here. As to whether the choice of topic is engaging or interesting is another matter. But for the topic chosen, there could be additional context offered in terms of how the dry details could have been presented. For instance, the page could have spoken about the reason why this particular vehicle is special and warrants a page of itself and some text describing what's special about it rather than just specification details.</p><p>The code is neither optimized for mobile display nor is it formatted for readability. There doesn't seem to be much unused code, but also there isn't much code to begin with.</p><p>Overall, a good first attempt!</p>",
  },
  {
    Name: "S. Tillai Natarajan",
    School: "SGP",
    Class: "8th",
    "Project URL":
      "https://drive.google.com/drive/folders/1nPSZ2T3YI_zp8N0TicSquac-sAuzJxvU?usp=sharing",
    "Project description":
      "My project name is Temples In India . it contains 3 states in which it has history of 2 to 3 temples of that state . My aim is to watch the temples in india across the world so that our indian temples will grow . Thank You . Jai Hind!",
    "Leaderboard Score %": 73.8,
    "Netlify Link": "https://tillai.netlify.app/",
    "Participation Prize": "No",
    "Overall Score": 32,
    Complexity: 7,
    Creativity: 7,
    "Learning to learn": 6,
    Originality: 7,
    "Code Quality": 5,
    Remarks:
      "<p>Overall the project is quite impressive both for the choice of topic, the amount of interesting information presented and how coherent it is. </p><p>The complexity is high in terms of how through the research done to accumulate the content is. The number of pages, the use of media etc. are appropriate enough to accomodate the goal of the website, which is commendable.</p><p>In terms of presentation, some improvements could have been welcome. Even though the text is not unreadable, the heavy use of background and tightly packed text content make it difficult to read. A little more space between the text, better use of color scheme could have made the content more readable.</p><p>The use of tiled images was not taught in the class.</p><p>Overall there is an appreciable amount of originality in how the HTML/CSS knowledge was used for a practical and focused application. It demonstrates that the student knows how to apply what they know. </p><p>The code quality is not great. The code is not formatted for readability and there is some amount of repetition in the CSS code used in the various files, which could have been avoided with the use of multiple external CSS files. The content could have been presented in a way that highlights all the various sections. At the moment some of the content could easily go unnoticed by a visitor. </p><p>Overall the project is well done and definitely a well done first attempt!</p>",
  },
  {
    Name: "Dinesh R",
    School: "DHA",
    Class: "7th",
    "Project URL": "https://marvel-news.netlify.app/",
    "Project description":
      "I have made lot of li buttons​\nBy touching the image we can go to the page",
    "Leaderboard Score %": 87.9,
    "Netlify Link": "https://marvel-news.netlify.app/",
    "Participation Prize": "Yes",
    "Overall Score": 29,
    Complexity: 7,
    Creativity: 9,
    "Learning to learn": 3,
    Originality: 7,
    "Code Quality": 3,
    Remarks:
      "<p>This project is quite noteworthy for how simple and yet how effective it is. It is well put together and coherent even if not flawless.</p><p>The complexity doesn't stand out, but it doesn't require complexity to do what it is supposed to do well. So it is good.</p><p>The concept is quite unique and the project incorporates creative use of media to present its central theme.</p><p>There is not much outside of what was part of the course, so doesn't score high on learning to learn.</p><p>The project is overall quite original, but the code quality is not great. External code/content is used without having removed unnecessary content. For instance, in the home page we can see a block of details that still has some links that don't go anywhere. These could have been removed. The code also includes some external stylesheets that don't add much. The contact page looks different from the rest of the pages, which doesn't look well integrated. The nav bar at the top is missing in the contact page, which is also not helpful. The notes on what each image is also so small that it is not easy to see it. Aside from these points that can be improved, this is an excellent first attempt!</p>",
  },
  {
    Name: "K. Nandhini",
    School: "ERD",
    Class: "8th",
    "Project URL":
      "https://drive.google.com/folderview?id=161XfbvO61JG7ABnPwPfP2DMIlAxyXGNs",
    "Project description":
      "This project is about the Ooty.With this website I give some information.",
    "Leaderboard Score %": 85.5,
    "Netlify Link": "https://nandhiniindhu.netlify.app/",
    "Participation Prize": "Yes",
    "Overall Score": 25,
    Complexity: 5,
    Creativity: 6,
    "Learning to learn": 6,
    Originality: 5,
    "Code Quality": 3,
    Remarks:
      "<p>The project follows a similar layout as the demo project, with minor variations.</p><p>In terms of the amount of content used, complexity of it, this is a fairly modest project. Specifically the places page could have shown more than just the name of the places.</p><p>The way the images are presented in circular format shows that the student learned something outside the course.</p><p>In terms of code quality the code isn't formatted for readability and also the use of internal stylesheets with repeated code isn't best practice.</p><p>Overall the project is a great first attempt.</p>",
  },
  {
    Name: "Thurgeshwaran",
    School: "SGP",
    Class: "8th",
    "Project URL": "https://thurgesh27.netlify.app/",
    "Project description":
      "This is an website about pride history of Tamil Nadu .</p><p>This is website  mostly about pride history of Tamilnadu.</p><p>This website have animation and more content video ect...</p><p>Special features  flip box animation bubble.",
    "Leaderboard Score %": 100,
    "Netlify Link": "https://thurgesh27.netlify.app/",
    "Participation Prize": "Yes",
    "Overall Score": 42,
    Complexity: 10,
    Creativity: 8,
    "Learning to learn": 10,
    Originality: 9,
    "Code Quality": 5,
    Remarks:
      "<p>This project is immediately impressive. It's well thoughtout, very coherent in its theme, well researched, well executed and offers the feel like a professionally created website, but it is not without flaws.</p><p>The website is quite complex but also avoids unnecessarily overusing complexity without justification. The use of bubbles animation on the home page and animation to flip the image boxes to reveal content are an excellent conjunction of complexity, originality, creativity and learning to learn aspects of this competition. </p><p>While it is certainly impressive, the project is not without flaws. The use of images that have the stock watermark on them is a distraction. The addition of comments in the CSS file was welcome but the code in both the HTML and CSS file is not consistently formatted for readability. The formatting of the footer is not consistent in all the pages. The text is not centered perfectly.</p><p>But despite the aforementioned flaws, this project shines bright and shows that a lot of effort went into researching and designing this site.</p>",
  },
  {
    Name: "S. Preethi",
    School: "SGP",
    Class: "7th",
    "Project URL": "https://dazzling-turing-65201b.netlify.app/",
    "Project description":
      "I am building a local information website through which the public can get the information about local shops in their area and places to visit in Coimbatore.",
    "Leaderboard Score %": 68.1,
    "Netlify Link": "https://localinfo.netlify.app/",
    "Participation Prize": "No",
    "Overall Score": 28,
    Complexity: 6,
    Creativity: 8,
    "Learning to learn": 4,
    Originality: 7,
    "Code Quality": 3,
    Remarks:
      "<p>This project is quite unique and immediately appears to be a professional product. There are a few flaws, but that doesn't take away the fact that it is a strong concept that is well executed.</p><p>The site has a lot of useful information, it may not all be presented in the most easy to consume format, but the information and the appropriate images that are used to link that information is noteworthy for the effort and the research. It fits the theme of the website.</p><p>While the features used aren't fundamentally new or different from what was learned in the course, the way it's been applied required ingenuity and different ways of applicaiton, which can be counted as learning to learn.</p><p>The concept is quite original and unique. The quality of the code is not great. The code is not formatted for readability and also, because internal style sheets are used instead of external stylesheets, there is a lot of repetition in code. Also the mobile is unviewable in mobile. Media queries could have been effectively used to fix this but it wasn't.</p>",
  },
  {
    Name: "P. Gopinath",
    School: "DHA",
    Class: "7th",
    "Project URL": "https://gopinath.netlify.app/",
    "Project description":
      "In this I would show how did the IPL 2020 happen and who are the team leaders and the points table etc.......",
    "Leaderboard Score %": 100,
    "Netlify Link": "https://gopinath.netlify.app/",
    "Participation Prize": "Yes",
    "Overall Score": 46,
    Complexity: 10,
    Creativity: 9,
    "Learning to learn": 10,
    Originality: 10,
    "Code Quality": 7,
    Remarks:
      "<p>This is overall one of the most impressive projects being reviewed here. There's a lot to be noted in favor of this project in terms of complexity, amount of information researched and presented, the novelty of the features displayed, overal coherence of the presentation etc.</p><p>There are a lot of features on display that weren't part of the course. The use of favicon, animated sidenav, embedding google forms, animated text entry fields, use of slider inputs, floating search box among others.</p><p>The concept is original and presented professionally.</p><p>While there are a lot of positives, it is also not without flaws. The code in HTML and CSS files are not formatted for readability. There is some code that isn't used and also there maybe a bit of repetition of code being used.</p>",
  },
  {
    Name: "Gnanasree.G",
    School: "ERD",
    Class: "8th",
    "Project URL":
      "https://drive.google.com/folderview?id=108J6j0GaRCQrPvXt_Uc0vC98UwAUyU_v",
    "Project description":
      "It was my first big html project. I have given my best.",
    "Leaderboard Score %": 96.1,
    "Netlify Link": "https://gnanasree.netlify.app/",
    "Participation Prize": "Yes",
    "Overall Score": 13,
    Complexity: 5,
    Creativity: 4,
    "Learning to learn": 0,
    Originality: 2,
    "Code Quality": 2,
    Remarks:
      "<p>This project is not very different from the demo project done as part of the course. There are a few minor variations of course, like the colors and images and cointent, but for the most part it is very similar to the demo project.</p><p>There is not much used that is not taught part of the course. The code is not formatted for readability. And some of the CSS is used as an external stylesheet and some others are used as internal stylsheet, which seems unnecessary and inconsistent.</p><p>Overall this project shines in the way it is presented. The choice of colors, the overall aesthetic appeal is good. A great first attempt!</p>",
  },
  {
    Name: "M.Mithun Chandru",
    School: "SGP",
    Class: "8th",
    "Project URL": "https://mithunchandru.netlify.app/",
    "Project description":
      "My website is school website it is made in mobile phone 📱 used app Acode",
    "Leaderboard Score %": 52.5,
    "Netlify Link": "https://mithunchandru.netlify.app/",
    "Participation Prize": "No",
    "Overall Score": 14,
    Complexity: 3,
    Creativity: 3,
    "Learning to learn": 0,
    Originality: 2,
    "Code Quality": 6,
    Remarks:
      "<p>This is not a very complex website, but it has been presented in a very concise and aesthetically appealing manner. </p><p>There is not much used here that is outside of what is presented in the course. The code quality is ok considering that this is a single page website. </p><p>Overall, the website is a great first attempt!</p>",
  },
  {
    Name: "M.Nisha",
    School: "DHA",
    Class: "7th",
    "Project URL":
      "https://drive.google.com/folderview?id=1QoVNNzFu5z4hDPfpTslWl3N6OgzrBaBR",
    "Project description":
      "Story of A.P.J Abdul Kalam .\nFor me the participate price also enough for me sir .\nI want more knowledge about coding so I did this project sir .",
    "Leaderboard Score %": 81.2,
    "Netlify Link": "https://mnisha.netlify.app/",
    "Participation Prize": "Yes",
    "Overall Score": 20,
    Complexity: 4,
    Creativity: 3,
    "Learning to learn": 3,
    Originality: 4,
    "Code Quality": 6,
    Remarks:
      "<p>The site is not very complex but it is well presented and coherent. </p><p>While the webpage itself is not complex, it has a lot of research done behind for the content.</p><p>The page has sufficient amount of images and media used. However the images could have been larger. </p><p>There is also use of an accordian, which wasn't part of the course. However it is very easy to not notice it. It could have been more prominent and used more than once, used more consistently.</p><p>Since this is a single page file, it doesn't have a lot of scope for error in terms of code quality. There doesn't seem to be too much of repetition of unused code.</p><p>Overall this is a coherent and well-presented site with a lot of useful information on the topic.</p>",
  },
  {
    Name: "Piramananthan.T",
    School: "DHA",
    Class: "7th",
    "Project URL":
      "https://6079a05608c75d1c08a6836a--ivimsmyschool.netlify.app/",
    "Project description":
      "The website is About Our School.I try to won the 1 Price.",
    "Leaderboard Score %": 98.2,
    "Netlify Link": "https://piramananthan.netlify.app/",
    "Participation Prize": "Yes",
    "Overall Score": 30,
    Complexity: 7,
    Creativity: 6,
    "Learning to learn": 7,
    Originality: 5,
    "Code Quality": 5,
    Remarks:
      "<p>The site is very neatly presented and very immaculate with a lot of attention to detail. It is easy to see that many hours were spent on the presentation.</p><p>The site follows a similar layout to what was done as part of the demo project in the course. But a lot of little presentational details heighten the complexity. For instance, the border around the page, the rotating animations on hovering over images etc.</p><p>The use of animation and image-based borders shows that some effort has gone into learning what's outside the course content. </p><p>The code quality is not perfect. The use of external style sheets and minimal amount of unused code is commendable, but the code is not formatted for readability. </p><p>Overall, this is very thorough first attempt!</p>",
  },
  {
    Name: "Mugilan",
    School: "ERD",
    Class: "7th",
    "Project URL": "https://fervent-varahamihira-f221e8.netlify.app/",
    "Project description":
      "i well tried for this website ,its about college annual function",
    "Leaderboard Score %": 44,
    "Netlify Link": "https://fervent-varahamihira-f221e8.netlify.app/",
    "Participation Prize": "No",
    "Overall Score": 26,
    Complexity: 7,
    Creativity: 6,
    "Learning to learn": 4,
    Originality: 6,
    "Code Quality": 3,
    Remarks:
      "<p>There is something odd about this project, in that it seems to be an actual website out there which was modified and submitted here, but I confirmed with the student and was assured that this is their actual work. The site does incorporate a lot of things that an actual website would require.</p><p>The registration and login pages are something that an actual website would require and it indicates that definitely some work was involved in learning outside the course. </p><p>The code quality is quite poor. There are some mistakes in the code and also it hasn't been formatted for readability. </p><p>Overall, this is one of the more strange submissions but still it can be observed that a lot of work has gone into it.</p>",
  },
  {
    Name: "A.Samsath",
    School: "ERD",
    Class: "7th",
    "Project URL":
      "https://drive.google.com/folderview?id=1K_fFWutgkGYs55urh0iT-dVYwwz8dmOq",
    "Project description":
      'Our project is about "we are making a stunning themes for weddings and parties etc"...We are trying to achieve that our company is very well in themes for yours events. Special features is we make the icons for the heading.',
    "Leaderboard Score %": 100,
    "Netlify Link": "https://samsath.netlify.app/",
    "Participation Prize": "Yes",
    "Overall Score": 29,
    Complexity: 5,
    Creativity: 6,
    "Learning to learn": 7,
    Originality: 5,
    "Code Quality": 6,
    Remarks:
      "<p>This is a project that seems like it incorporates a lot of elements that were largely copied from a template. However the student assured that it involved their original work.</p><p>The site is quite simple and looks neat and well presented. The code quality is not bad. It is formatted for readability and not a lot of unused content exists.</p><p>Overall a neat looking site. Definitely a good first attempt.</p>",
  },
  {
    Name: "E. Shiyam",
    School: "ERD",
    Class: "7th",
    "Project URL":
      "https://drive.google.com/folderview?id=183XGk1K1wDGxDasHf0S-0409dCRQIj9B",
    "Project description":
      "My project is telling about Ferrari Car.I created two pages.I attached a photo of Feffari Car in each page.",
    "Leaderboard Score %": 81.9,
    "Netlify Link": "https://shiyam.netlify.app/",
    "Participation Prize": "Yes",
    "Overall Score": 12,
    Complexity: 2,
    Creativity: 4,
    "Learning to learn": 0,
    Originality: 4,
    "Code Quality": 2,
    Remarks:
      "<p>This is a very simple attempt to utilize what the student has learned in the course. </p><p>The site is not complex at all, but some amount of research has gone into collecting the information. </p><p>The site has a few obvious mistakes in that the second page doesn't have any styling. The css file is not included properly in it. The second page also has broken links when trying to go back to the first page. </p><p>The code quality is quite poor. There are some breaking mistakes in the code and it is also not formatted for readability.  </p><p>Even though there are flaws here, this is a commendable attempt to apply the knowledge gained in the course. Very good!</p>",
  },
  {
    Name: "M. Laavanya",
    School: "SGP",
    Class: "8th",
    "Project URL": "https://naughty-beaver-d0fec1.netlify.app/",
    "Project description":
      "i have written some intersting facts about flowers  that most of the peoples dosen't know",
    "Leaderboard Score %": 72.7,
    "Netlify Link": "https://laavanya.netlify.app/",
    "Participation Prize": "No",
    "Overall Score": 19,
    Complexity: 6,
    Creativity: 5,
    "Learning to learn": 0,
    Originality: 5,
    "Code Quality": 3,
    Remarks:
      "<p>This project has a lot of useful information and it is presented fairly well. </p><p>The three pages speaking about the deadliest, ugliest and beautiful flowers were informative and it suggests that fair amount of work went into gathering the information.</p><p>Some room for improvement can be observed in how there are unnecessary symbols in the text across the page. Also it would have been better to have the about page point to an actual page where the video was embedded. Instead it takes you away from the site.</p><p>Overall this is a very good first attempt and it uses a lot of the knowledge gained in this course.</p>",
  },
];
const headers = [
  "Name", // 0
  "School", // 1
  "Class", // 2
  "Project URL", // 3
  "Project description", // 4
  "Leaderboard Score %", // 5
  "Netlify Link", // 6
  "Participation Prize", // 7
  "Overall Score", // 8
  "Complexity", // 9
  "Creativity", // 10
  "Learning to learn", // 11
  "Originality", // 12
  "Code Quality", // 13
  "Remarks", // 14
];

const sortedScores = scores.sort(function (a, b) {
  var keyA = a[headers[8]];
  keyB = b[headers[8]];
  // Compare the 2 dates
  if (keyA < keyB) return 1;
  if (keyA > keyB) return -1;
  return 0;
});

console.log({ sortedScores });

function initializeCardGroup() {
  return $('<div class="cards">');
}

function renderWinnerCards() {
  console.log("Rendering winner Cards...");
  let cardGroup = initializeCardGroup();
  const participants = sortedScores;
  for (let i = 0; i < 3; i++) {
    const participant = participants[i];
    const total = (participant[headers[8]] * 100) / 50;
    const participationPrize = participant[headers[7]] === "Yes" ? " 🎖️" : "";
    const participantName =
      '<p id="participant-name">' +
      "#" +
      (i + 1).toString() +
      ". " +
      participant[headers[0]] +
      " 🏆 " +
      participationPrize +
      ' <span id="participant-sub-name"> (' +
      participant[headers[2]] +
      " Std, " +
      participant[headers[1]] +
      ") </p>";
    $(cardGroup).append(
      '<div onClick="showParticipantInfo(' +
        i +
        ')" class="ui card"  style=" margin: 5px; text-align: center;"> <div class="content">     <a class="header">' +
        participantName +
        '</a> <div class="progress-bar progress-bar-striped bg-' +
        progressColor(total) +
        '" role="progressbar" style="width: ' +
        total +
        '%" aria-valuenow="' +
        total / 50 +
        '" aria-valuemin="0" aria-valuemax="50"> <span style="font-size: 1.2em">' +
        total / 2 +
        " / 50</span></div>   </div>"
    );
    $("#winner-cards").append(cardGroup);
  }
}

function renderParticipantCards() {
  console.log("Rendering participant Cards...");
  let cardGroup = initializeCardGroup();
  const participants = sortedScores;
  for (let i = 3; i < participants.length; i++) {
    const participant = participants[i];
    const total = (participant[headers[8]] * 100) / 50;
    const participationPrize = participant[headers[7]] === "Yes" ? " 🎖️" : "";
    const participantName =
      '<p id="participant-name">' +
      "#" +
      (i + 1).toString() +
      ". " +
      participant[headers[0]] +
      participationPrize +
      ' <span id="participant-sub-name"> (' +
      participant[headers[2]] +
      " Std, " +
      participant[headers[1]] +
      ") </p>";
    $(cardGroup).append(
      '<div onClick="showParticipantInfo(' +
        i +
        ')" class="ui card"  style=" margin: 5px; text-align: center;"> <div class="content">     <a class="header">' +
        participantName +
        '</a> <div class="progress-bar progress-bar-striped bg-' +
        progressColor(total) +
        '" role="progressbar" style="width: ' +
        total +
        '%" aria-valuenow="' +
        total / 50 +
        '" aria-valuemin="0" aria-valuemax="50"> <span style="font-size: 1.2em">' +
        total / 2 +
        " / 50</span></div>   </div>"
    );

    $("#participant-cards").append(cardGroup);
  }
}

function progressColor(percentage) {
  status = "";
  status = percentage > 75 ? "success" : status;
  status = percentage > 50 && percentage < 75 ? "info" : status;
  status = percentage > 25 && percentage < 50 ? "warning" : status;
  status = percentage < 25 ? "danger" : status;
  return status;
}

function showParticipantInfo(participantIndex) {
  const participant = scores[participantIndex];
  console.log("Showing Participant =>", participant);
  $("#participant-info-modal-title").text(
    participant[headers[0]] +
      " (" +
      participant[headers[2]] +
      " std, " +
      participant[headers[1]] +
      ")"
  );
  const participationPrize =
    participant[headers[7]] === "Yes"
      ? "Qualifies for participation Prize"
      : "Doesn't qualify for participation Prize";
  const total = (participant[headers[8]] * 100) / 50;
  const complexity = (participant[headers[9]] * 100) / 10;
  const creativity = (participant[headers[10]] * 100) / 10;
  const learning = (participant[headers[11]] * 100) / 10;
  const originality = (participant[headers[12]] * 100) / 10;
  const code = (participant[headers[13]] * 100) / 10;
  $("#participant-project-link").empty();
  $("#participant-project-link").append(
    '<b>Link</b> - <a style="color: red;" href=" ' +
      participant[headers[6]] +
      '" target="_blank" rel="noopener noreferrer">' +
      participant[headers[6]] +
      "</a>"
  );
  $("#participant-leaderboard-score").empty();
  $("#participant-leaderboard-score").append(
    "<p><b>Classroom Score</b> - " +
      participant[headers[5]] +
      " (" +
      participationPrize +
      ")</p>"
  );
  $("#participant-total-score").empty();
  $("#participant-total-score").append(
    '<div class="progress-bar progress-bar-striped bg-' +
      progressColor(total) +
      '" role="progressbar" style="width: ' +
      total +
      '%" aria-valuenow="' +
      total / 50 +
      '" aria-valuemin="0" aria-valuemax="50"> <span style="font-size: 1.2em">' +
      total / 2 +
      " / 50</span></div>"
  );
  $("#participant-complexity-score").empty();
  $("#participant-complexity-score").append(
    '<div class="progress-bar progress-bar-striped bg-' +
      progressColor(complexity) +
      '" role="progressbar" style="width: ' +
      complexity +
      '%" aria-valuenow="' +
      complexity / 10 +
      '" aria-valuemin="0" aria-valuemax="10"> <span style="font-size: 1.2em">' +
      complexity / 10 +
      " / 10</span></div>"
  );
  $("#participant-creativity-score").empty();
  $("#participant-creativity-score").append(
    '<div class="progress-bar progress-bar-striped bg-' +
      progressColor(creativity) +
      '" role="progressbar" style="width: ' +
      creativity +
      '%" aria-valuenow="' +
      creativity / 10 +
      '" aria-valuemin="0" aria-valuemax="10"> <span style="font-size: 1.2em">' +
      creativity / 10 +
      " / 10</span></div>"
  );
  $("#participant-learning-score").empty();
  $("#participant-learning-score").append(
    '<div class="progress-bar progress-bar-striped bg-' +
      progressColor(learning) +
      '" role="progressbar" style="width: ' +
      learning +
      '%" aria-valuenow="' +
      learning / 10 +
      '" aria-valuemin="0" aria-valuemax="10"> <span style="font-size: 1.2em">' +
      learning / 10 +
      " / 10</span></div>"
  );
  $("#participant-originality-score").empty();
  $("#participant-originality-score").append(
    '<div class="progress-bar progress-bar-striped bg-' +
      progressColor(originality) +
      '" role="progressbar" style="width: ' +
      originality +
      '%" aria-valuenow="' +
      originality / 10 +
      '" aria-valuemin="0" aria-valuemax="10"> <span style="font-size: 1.2em">' +
      originality / 10 +
      " / 10</span></div>"
  );
  $("#participant-code-score").empty();
  $("#participant-code-score").append(
    '<div class="progress-bar progress-bar-striped bg-' +
      progressColor(code) +
      '" role="progressbar" style="width: ' +
      code +
      '%" aria-valuenow="' +
      code / 10 +
      '" aria-valuemin="0" aria-valuemax="10"> <span style="font-size: 1.2em">' +
      code / 10 +
      " / 10</span></div>"
  );
  $("#participant-student-remarks").empty();
  $("#participant-student-remarks").append(participant[headers[4]]);
  $("#participant-grader-remarks").empty();
  $("#participant-grader-remarks").append(participant[headers[14]]);

  $("#participant-info-modal-trigger").click();
}
