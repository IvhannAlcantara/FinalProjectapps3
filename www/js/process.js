// <video width="320" height="240" controls>
//   <source src="movie.mp4" type="video/mp4">
//   <source src="movie.ogg" type="video/ogg">
//   Your browser does not support the video tag.
// </video>

let process = {
	menu:function(){
		
		let content = <div>
		    <h1 align='center'>FAMOUS PHILIPPINE FESTIVALS</h1>
		    <div align='center'>
			</div>
			<audio id="audio_bomb">
				<source src="audio/bomb.mp3" type="audio/mp3" />
			</audio>
			<div>
			<p class="buttons-row">
				<a href='#' class=" button button-fill color-black"  onClick={process.page1}>Ati-Atihan Festival</a>
				<a href='#' class=" button button-fill color-black"  onClick={process.page2}>Sinulog Festival</a>
				<a href='#' class=" button button-fill color-black" onClick={process.page3}>Dinagyang Festival</a>
				<a href='#' class=" button button-fill color-black" onClick={process.page10}>Panagbenga Festival</a>
				<a href='#' class=" button button-fill color-black" onClick={process.page11}>Moriones Festival</a>
				
			</p>
			<p class="buttons-row">
				<a href='#' class=" button button-fill color-black" onClick={process.page6}>Aliwan Fiesta</a>
				<a href='#' class=" button button-fill color-black" onClick={process.page4}>Pahiyas Festival</a>
				<a href='#' class=" button button-fill color-black" onClick={process.page7}>Pintados Festival</a>
				<a href='#' class=" button button-fill color-black" onClick={process.page8}>Kadayawan Festival</a>
				<a href='#' class=" button button-fill color-black" onClick={process.page9}>MassKara Festival</a>
				</p>
				<p class="buttons-row">
				<a href='#' class=" button button-fill color-black" onClick={process.page12}>Ati-Atihan Festival</a>
				</p>
				</div>
		</div>;
		ReactDOM.render(content,document.getElementById('root'));
	},
	page1:function(){
		let content = <div>
				<h2 align='center' >Ati-Atihan Festival</h2>
				<p class="buttons-row" width="80px" height="50px">
				<a href='#'  class="button button-fill color-blue"  onClick={process.menu}>BACK</a>
				</p>
				<div align='center'>
						<img src='img/ati-atihan.jpg' />

				<p align='center'>
				<br/><div>3rd weekend of January | Kalibo, Aklan</div>
					<div>Tourists who flock to Kalibo for the festivities are free to cover themselves in 
					<div>black soot and dance on the streets with the drum beats.</div>
					<div>Known as the “The Filipino Mardi Gras,” it is truly an experience not to be missed.</div>
					</p>
				</div>

			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},
	page2:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<h2 align='center'>Sinulog Festival</h2>
				<p class="buttons-row">
				<br/><a href='#' class="button button-fill color-blue" onClick={process.menu}>BACK</a>
				</p>
				<div align='center'>
						<img src='img/sinulog.jpg' width='100px' height='50px' />
					<p align='center'>
						<br/><div>3rd weekend of January | Cebu City</div>
						<div>It is one of the most attended festivals in the Philippines, attracting millions of</div>
						<div>locals and tourists from all over the world. In 2013, it was reported that the</div>
						<div>number of participants reached a whopping four million.</div>
						<div>Sinulog not only sets the stage for Cebuano talents but also for other regional acts</div>
						<div>as contingents from neighboring provinces are showcased through street</div>
						<div>dancing, pageantry, and sports. It is also known for hosting the country’s biggest raves,</div>
						<div>drawing a growing number of party-goers from all over the country year after year.</div>
					
					</p>
				</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},
	page3:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<h2 align='center'>Dinagyang Festival</h2>
				<p class="buttons-row">
				<br/><a href='#' class="button button-fill color-blue"onClick={process.menu}>BACK</a>
				</p>
				<div align='center'>
						<img src='img/dinagyang.jpg' width='100px' height='50px' />

					<p align='center'>
						<br/><div>4th weekend of January | Iloilo City</div>
					<div>It’s no wonder how this city’s once simple celebration in honor of</div>
					<div>the child Jesus (Sto. Niño) ended up bagging several awards including the Association</div>
					<div>coconut water and sugar.Blend well and add grated butong.</div>
					<div>of Tourism Officers of the Philippines’ (ATOP) title holder</div>
					<div>for Best Tourism Event of the Philippines.</div>
					<div>According to Iloilo City Tourism Officer Ben Jimena,</div>
					<div>the winning tribes are now going international and will be promoting Philippine tourism to countries</div>
					<div>like the United States, Canada, and Singapore.</div>
					</p>
				</div>

			</div>;

			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},
	page4:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<h2 align='center'>Panagbenga Festival</h2>
				<p class="buttons-row">
				<br/><a href='#' class="button button-fill color-blue" onClick={process.menu}>BACK</a>
				</p>
			<div align='center'>
						<img src='img/panagbenga.jpg' width='100px' height='50px' />
					<p align='center'>
						<br/><div>February | Baguio City</div>
						<div>Adding to the usual Baguio tourist sites to visit,</div>
						<div>the whole length of the Session Road during Panagbenga becomes a feast for the eyes. Called “Session </div>
						<div>Road in Bloom,” Baguio’s famous street is closed to vehicular traffic to make way for flower carts,</div>
						<div>street dancing, and outdoor cafes.</div>
						</div>
					</p>	
					</div>

				</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

page5:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<h2 align='center'>Moriones Festival</h2>
				<p class="buttons-row">
				<br/><a href='#' class="button button-fill color-blue" onClick={process.menu}>BACK</a>
				</p>
			<div align='center'>
						<img src='img/moriones.jpg' width='100px'  height='50px' />
					<p align='center'>
						<br/><div>Holy Week | Boac, Gasan, and Mogpog, Marinduque</div>
					
						<div>During the festival you will see Marinduqueños dressed up as</div>
						<div>centurions (Moriones) looking for Longinus. One person acts as Longinus, hiding from </div>
						<div>them while the townspeople play along and allow him to hide in their houses.</div>
						<div>Via Crucis or the reenactment of the Passion of Christ also happens during this Philippine festival.</div>
						
					</p>
			</div>

				</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

	page6:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<h2 align='center'>Aliwan Fiesta</h2>
				<p class="buttons-row">
				<br/><a href='#' class="button button-fill color-blue" onClick={process.menu}>BACK</a>
				</p>
			<div align='center'>
						<img src='img/aliwan.jpg' width='100px' height='50px' />
					<p align='center'>
						<br/><div>Last weekend of April | Pasay City, Manila</div>
					
						<div>For a lot of people who are in Manila, heading to the CCP Complex is the cheapest</div>
						<div>way to see quality performances from tribes representing festivals in</div>
						<div>their respective provinces. Plus, it’s always great to see tribes from Dinagyang</div>
						<div>and Sinulog give their A-performances to grab the million-peso grand prize.</div>
						
						<br/>
						<br/>
					</p>

				</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},
page7:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<h2 align='center'>Pahiyas Festival</h2>
				<p class="buttons-row">
				<br/><a href='#' class="button button-fill color-blue" onClick={process.menu}>BACK</a>
				</p>
			<div align='center'>
						<img src='img/pahiyas.jpg' width='100px' height='50px' />
					<p align='center'>
						<br/><div>15th of May | Lucban, Quezon</div>
					

					<div>1 It’s not uncommon to see singakamas (turnip), talong (eggplant), sigarilyas (winged bean) and all the</div>
					<div>2 other vegetables and fruits mentioned in the Bahay Kubo song hanging on</div>
					<div>the exteriors of their homes. You can actually bring a basket and</div>
					<div>pick the produce from the walls for free.</div>
					
					</p>

				</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

	page8:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<h2 align='center'>Pintados Festival</h2>
				<p class="buttons-row">
				<br/><a href='#' class="button button-fill color-blue" onClick={process.menu}>BACK</a>
				</p>
			<div align='center'>
						<img src='img/pintados.jpg' width='100px' height='50px' />
							<p align='center'>
							<div>29th of June | Tacloban City</div>

							<div>This festival has been growing in popularity because of the</div>
							<div>contingents they send to the Aliwan Fiesta every year. They don’t fail to amaze. Leyte is also </div>
							<div>the home base of other festivals like Alikaraw, Pasaka, and the 2009 Aliwan Fiesta champions, Buyogan.</div>
							
							</p>


</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

page9:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<h2 align='center'>Kadayawan Festival</h2>
				<p class="buttons-row">
				<br/><a href='#' class="button button-fill color-blue" onClick={process.menu}>BACK</a>
				</p>
			<div align='center'>
						<img src='img/kadayawan.jpg' width='100px' height='50px' />
						<p align='center'>
						<br/><div>3rd week of August | Davao City</div>
						<div>It is a celebration of Davao‘s as well as the rest of Mindanao’s abundance;</div>
						<div>howcasing flowers, fruits, and other produces that abound the country’s</div>
						<div>second largest island. Just two years ago, they even introduced</div>
						<div>a week-long street food fiesta in Freedom Park, Roxas Avenue called Kaan sa Da’n.</div>
						
						
						</p>


</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

	page10:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<h2 align='center'>MassKara Festival</h2>
				<p class="buttons-row">
				<br/><a href='#' class="button button-fill color-blue" onClick={process.menu}>BACK</a>
				</p>
			<div align='center'>
						<img src='img/masskara.jpg' width='100px' height='50px' />
						<p align='center'>
						<div>19th of October | Bacolod City</div>
			
						<div>MassKara is a combination of the words “mass” which means “crowd” and</div>
						<div>“kara” which means “face.” You will see participants wearing smiling masks</div>
						<div>signifying a multitude of smiling faces, solidifying Bacolod’s title as the “City of Smiles.”</div>

						
						</p>

</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},



	loading:function(){
		let content = <div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					
					<audio id="audio">
						<source src="audio/bomb.mp3" type="audio/mp3" />
					</audio>
				</div>;
		ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio').play();
		process.replayAudio('audio');
	},
	audio:function(audio){
		let _audio = document.getElementById(audio);
		return _audio;
	},
	replayAudio:function(audio){
		process.audio(audio).addEventListener('ended',function(){
			process.audio('audio').pause();
			process.audio(audio).play();
		})
	}
}

let counting = 0;
process.loading();
setTimeout(function(){
	process.audio('audio').pause();
	process.menu();
},5000);