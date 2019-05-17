'use strict';

function createPortfolioSection () {
	return `
    <section class="projects-wrapper reverse">
		  <div class="project-text-wrapper">
		  	<h2>Pluto</h2>
		    <p>
		    	Pluto is a diversity and inclusion platform that provides companies with the tools and insights they need to build a diverse, inclusive and equitable workforce.  Companies gain actionable insights from comprehensive analytics, allowing them to tailor initiatives and measure their impact.  Pluto also offers incident reporting to remove barriers that have historically plagued incident reporting systems and help companies discover and address workplace issues faster.
		    </p>
		    <br>
		    <p>
		    	MongoDb, Express, Angular 1.6, NodeJs, Highcharts, HMTL, CSS
		    </p>
		    <br>
		    <a href="https://pluto.life" target="_blank">View live</a>

		  </div>

		  <div class="project-image-wrapper">
	    	<img src="assets/pluto-full.png" alt="Pluto's landing page">
	    </div>

	    
	  </section>

	  <section class="projects-wrapper">
	    
	    <div class="project-text-wrapper">
	    	<h2>FRIENDS Quiz</h2>
		    <p>
		    	This was a short quiz about the television series FRIENDS covering some basic and not-so-basic knowledge about the characters and plot of the show
		    </p>
		    <br>
		    <p>
		    	HMTL5, CSS, jQuery
		    </p>
		   	<br>
	    	<a href="https://keeleyduffey.github.io/quiz-app/" target="_blank">View live</a>
	    	<a href="https://github.com/keeleyduffey/quiz-app/" target="_blank">View on Github</a>
		  </div>

	    <div class="project-image-wrapper">
	      <img src="assets/friends1.png" alt="FRIENDS quiz start page">
		    <img src="assets/friends2.png" alt="FRIENDS question page">
		    <img src="assets/friends3.png" alt="FRIENDS answer page">
		    <img src="assets/friends4.png" alt="FRIENDS final page">
	    </div>
		   
	  </section>
	`;
}

function createAboutSection () {
	return `
    <section class="about-container">
     
     	<div class="bio-img-wrapper">
	    	<img src="assets/keeley.jpeg" alt="Keeley Duffey">
		 	</div>

		 	<div class="bio-text-wrapper">  
		    <p> 
		    	I am a full stack developer with 3 years of experience, currently working in Javascript, AngularJs, Express, NodeJs, MongoDB, and jQuery but always interested in learning more. I enjoy writing clean code, using new technologies, and leveraging the power of code to connect people. I also enjoy the continual learning that programming brings. 
					<br>
					<br>
					Past experience in customer service and non-profit work, as well as living in a few countries, has taught me how to communicate effectively and adapt in order to be successful in various work environments.  As a developer, I bring these skills along with passion, dedication and self-awareness to the work I do. Outside of work, I enjoy spending time outdoors, watching college football (Go Dawgs!), traveling and reading good books.
 				</p>
 			</div>
	  </section>
	`;
}

function createContactSection () {
	return `
   <section class="contact-wrapper">
	    <ul>
	    	<li>
	    		<a href="https://www.linkedin.com/in/keeleyduffey/" target="_blank">
	    			<span class="contact-label">Connect with me:</span>
	    			<i class="fab fa-linkedin-in"></i>
					</a>			    	
	    	</li>
	    	<li>
	    		<a href="https://github.com/keeleyduffey/" target="_blank">
	    			<span class="contact-label">Check out my work:</span> 
	    			<i class="fab fa-github"></i>
					</a>			    	
	    	</li>
	    	<li>
	    		<a href="mailto:keeleyduffey@gmail.com">
	    			<span class="contact-label">Write to me:</span>
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

function handleQuiz () {
	renderPortfolio();
	renderAbout();
	renderContact();
}

$(handleQuiz);
