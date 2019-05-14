'use strict';

function createPortfolioSection () {
	return `
    <section class="projects-wrapper">
	    <h2>Pluto</h2>
	    <p>
	    	Pluto is a diversity and inclusion platform that provides companies with the tools and insights they need to build a diverse, inclusive and equitable workforce.  Companies gain actionable insights from comprehensive analytics, allowing them to tailor initiatives and measure their impact.  Pluto also offers incident reporting to remove barriers that have historically plagued incident reporting systems and help companies discover and address workplace issues faster.
	    </p>
	    <p>
	    	MongoDb, Express, Angular 1.6, NodeJs, Highcharts, HMTL, CSS
	    </p>
	    <p>
	    	<a href="https://pluto.life">View live</a>
	    </p>
	  </section>

	  <section class="projects-wrapper">
	    <h2>FRIENDS Quiz</h2>
	    <p>
	    	This was a short quiz about the television series FRIENDS
	    </p>
	    <p>
	    	HMTL5, CSS, jQuery
	    </p>
	    <p>
	    	<a href="https://keeleyduffey.github.io/quiz-app/">View live</a>
	    	<a href="https://github.com/keeleyduffey/quiz-app/">View on Github</a>
	    </p>
	  </section>
	`;
}

function createAboutSection () {
	return `
    <section class="about-container">
	    <!-- <h2>About</h2> -->
	     <!-- <div class="bio-wrapper">   -->
	     	<div class="bio-img-wrapper">
		    	<img src="assets/keeley_duffey.jpg" alt="Keeley Duffey">
			 	</div>
		    <p> 
		    	I am a full stack developer with 3 years of experience, currently working in Javascript, AngularJs, Express, NodeJs, MongoDB, and jQuery but always interested in learning more. I enjoy writing clean code, using new technologies, and leveraging the power of code to connect people. I also enjoy the continual learning that programming brings. 
					<br>
					<br>
					Past experience in customer service and non-profit work, as well as living in a few countries, has taught me how to communicate effectively and adapt in order to be successful in various work environments.  As a developer, I bring these skills along with passion, dedication and self-awareness to the work I do. Outside of work, I enjoy spending time outdoors, watching college football (Go Dawgs!), traveling and reading good books.
 				</p>
 			<!-- </div> -->
	  </section>
	`;
}

function createContactSection () {
	return `
   <section class="contact-wrapper">
	    <!-- <h2>Contact</h2> -->
	    <ul>
	    	<li>
	    		<span class="contact-label">Connect with me:</span>
	    		<a href="https://www.linkedin.com/in/keeleyduffey/" target="_blank">
	    			<i class="fab fa-linkedin-in"></i>
					</a>			    	
	    	</li>
	    	<li>
	    		<span class="contact-label">Check out my work:</span> 
	    		<a href="https://github.com/keeleyduffey/" target="_blank">
	    			<i class="fab fa-github"></i>
					</a>			    	
	    	</li>
	    	<li>
	    		<span class="contact-label">Write to me:</span>
	    		<a href="mailto:keeleyduffey@gmail.com">
	    			<i class="fas fa-envelope"></i>
					</a>			    	
	    	</li>
	    </ul>
	  </section>
	`;
}


function renderPortfolio () {
	$('.portfolio-btn').on('click', (event) => {
		event.preventDefault();
		$('.intro-screen').css('display', 'none');
		$('.main-content').css('display', 'block');
		$('.container').css('display', 'flex');
		$('.container').html(createPortfolioSection());
		
	})
}

function renderAbout () {
	$('.about-btn').on('click', (event) => {
		event.preventDefault();
		$('.intro-screen').css('display', 'none');
		$('.main-content').css('display', 'block');
		$('.container').css('display', 'flex');
		$('.container').html(createAboutSection());
		
	})
}

function renderContact () {
	$('.contact-btn').on('click', (event) => {
		event.preventDefault();
		$('.intro-screen').css('display', 'none');
		$('.main-content').css('display', 'block');
		$('.container').css('display', 'flex');
		$('.container').html(createContactSection());
		
	})
}

// function submitAnswer () {
// 	$('.content-container').on('submit', 'form', function(event) {
// 		event.preventDefault();

// 		const selection = $("input:checked").val(),
// 			questionObj = questions[count],
// 			correctAnswer = questions[count].correctAnswer;

// 		if (selection === correctAnswer) {
// 			correctAnswerCount++;
// 			renderCorrectAnswerMessage(questionObj);
// 		} else {
// 			incorrectAnswerCount++;
// 			renderIncorrectAnswerMessage(questionObj);
// 		}
// 		count++;
// 	})
// }

// function nextClick () {
// 	$('.content-container').on('click', '.next-question-btn', function(event) {
// 		event.preventDefault();
// 		if (count < questions.length) {
// 			renderQuestion();
// 		} else {
// 			renderFinalScreen();
// 		}
// 	})
// }

// function retakeQuiz () {
// 	$('.content-container').on('click', '.retake-quiz-btn', function(event) {
// 		event.preventDefault();
// 		resetAllCounts();
// 		$('.status-container').css('display', 'none');
// 		$('.content-container').css('display', 'none');
// 		$('.intro-screen').css('display', 'block');
// 	})
// }

function handleQuiz () {
	renderPortfolio();
	renderAbout();
	renderContact();
	// submitAnswer();
	// nextClick();
	// retakeQuiz();
}

$(handleQuiz);
