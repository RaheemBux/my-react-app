import React, { Component } from "react";
import Questions from "./Questions";


const data = [
	{
		"category":"Energy",
		"questions":
			[
				{
					"question" : "What state in the U.S. has the largest continuous system of mangroves in the world?  ",
					"correct":"Florida",
					"options":["California","Texas","Florida","New Mexico"]
				},
				{
					"question" : "Which of the following uses the most amount of water in American homes? ",
					"correct":"Showers",
					"options":["Toilets","Sinks","Showers","Drinking Water"]
				},
				{
					"question" : "Which state produces the most amount of coal?",
					"correct":"Pennsylvania",
					"options":["Texas","New Jersey","Pennsylvania","Wisconsin"]
				},
				{
					"question" : "What is the most abundant gas in Earth’s atmosphere?",
					"correct":"Nitrogen",
					"options":["Oxygen","Argon","Carbon","Nitrogen"]
				},
				{
					"question" : "Which sector of America uses the most energy per year?",
					"correct":"Attractions",
					"options":["Homes","Industrialization","Transportation","Attractions"]
				},
				{
					"question" : "What was the most common form of energy used in the 1800s?",
					"correct":"Ketone",
					"options":["Wood","Petrol ","Ketone","coal"]
				},
				{
					"question" : "What is the name of the energy that contains both Kinetic and Potential energy? ",
					"correct":"Total Mechanical Energy",
					"options":["Total Mechanical Energy","Mechanical Energy","Total Energy","KPM Energy"]
				},
				{
					"question" : "How many basic forms of energy have been studied?",
					"correct":"6",
					"options":["6","10","8","9"]
				},
				{
					"question" : "Which of the following renewable energy types provide the most energy per year?",
					"correct":"Solar",
					"options":["Geothermal ","Wind","Solar","Hydroelectric "]
				},
				{
					"question" : "Which of the following energy sources are not derived from the sun?",
					"correct":"Nuclear",
					"options":["Nuclear","Biomass","wind","Solar"]
				}
			]
	},
	{
		"category":"Physics",
		"questions":
			[
				{
					"question" : "What physical state of matter is intermediate between a solid and gas?",
					"correct":"Liquid",
					"options":["Solid","Gas","Liquid","Plazma"]
				},
				{
					"question" : "Which of the following BEST describes the term static? ",
					"correct":"Stationary",
					"options":["Stationary","Low","Constant","used"]
				},
				{
					"question" : "Mary tried to lift her couch by exerting 500 newtons of force but it doesn’t budge. If the couch weighed 2,000 newtons, how much work did she do? ",
					"correct":"0 joules",
					"options":["0 joules","500 joules","50 joules","500 joules"]
				},
				{
					"question" : "Short Answer Jeff walks west in a straight path for 100 meters and then east in a straight path for 150 meters. What is the magnitude of his displacement, in meters?",
					"correct" : "50 ",
					"options" :["50","100","150","250"]
				},
				{
					"question" : "The hydrologic cycle describes the circulation of Earth?",
					"correct" : "Water",
					"options" :["Rock","Sendiments","Water","Soil"]
				},
				{
					"question" : "What is the name of the rock that makes up most of the ocean floor and volcanic ocean islands? ",
					"correct" : "Basalt",
					"options" :["Basalt","Granite","Pyric ","Marbel"]
				},
				{
					"question" : "What atomic particle balances the charge of protons to produce a neutral atom?",
					"correct" : "Electron",
					"options" :["Electron","Nuetron","Photon","Proton"]
				},
				{
					"question" : "Isotopes of the same element are based on their different numbers of what atomic particle? ",
					"correct" : "Neutrons",
					"options" :["Electrons","Nuetrons","Photons","protons"]
				},
				{
					"question" : "Which of the following most directly contributes to the actual mechanical advantage always being less than the ideal mechanical advantage?",
					"correct" : "Friction",
					"options" :["Friction","The basic design of any machine","How simple machines are combined ","the input distance always being less than the output distance"]
				},
				{
					"question" : "If a chimpanzee were to throw darts at a Periodic Table, he would most likely hit an element with which of the following characteristics?",
					"correct" : "A solid at room temperature",
					"options" :["A solid at room temperature","a liquid at room temperature","a gas at room temperature","a naturally radioactive element"]
				}
			]
	},
	{
		"category":"Chemistry",
		"questions":
			[
				{
					"question" : "Which of the following is a product found in most toothpastes for the purpose of making the teeth more resistant to decay by promoting remineralization?",
					"correct":"Fluoride",
					"options":["Diethylene glycol","Fluoride","Titanium dioxide ","Melamine"]
				},
				{
					"question" : "The lead-acid battery is most commonly found in?",
					"correct":"Automobiles",
					"options":["Automobiles","Cellphones","Laptops","flashlights"]
				},
				{
					"question" : "What element creates the strongest bonds known to man?",
					"correct":"Carbon",
					"options":["Carbon","Flourine","Hydrogen","Oxygen"]
				},
				{
					"question" : "Which of the following elements are diatomic?",
					"correct" : "Oxygen",
					"options" :["Magnesium ","Argon","Carbon","Oxygen"]
				},
				{
					"question" : "Stainless steel is differentiated from other steels based mainly on the content of what element? ",
					"correct" : "Chromium ",
					"options" :["Chromium ","Iron","Copper","vanadium"]
				},
				{
					"question" : "Rounded to the nearest whole number, what is absolute zero in degrees Celsius?",
					"correct" : "–273",
					"options" :["–273 ","0","-1","273"]
				},
				{
					"question" : "The exchange or sharing of what atomic particle is most directly involved in chemical bonding? ",
					"correct" : "Electron",
					"options" :["Electron","Nuetron","Beta-particles","Proton"]
				},
				{
					"question" : "How many electrons are needed for an atom of Oxygen to reach a stable state? ",
					"correct" : "8",
					"options" :["8","12","16","6"]
				},
				{
					"question" : "What is Avogadro’s number?",
					"correct" : "6.0223 x 10^23",
					"options" :["6.0223 x 10^23 ","0.00821","4.440 x10^26","-4.440 x 10^26"]
				},
				{
					"question" : "What is the pH of water at 25 degrees C?",
					"correct" : "7",
					"options" :["2","1","7","5.2"]
				}
			]
	},
	{
		"category":"Biology",
		"questions":
			[
				{
					"question" : "What organelle functions to isolate a human cell’s chromosomes from the cytoplasm?",
					"correct":"Nucleus",
					"options":["Nucleus","Nucleolus ","Smooth Endoplasmic Reticulum","Rough Endoplasmic Reticulum"]
				},
				{
					"question" : "What is the primary oxygen-carrying protein found in red blood cells?",
					"correct":"Hemoglobin",
					"options":["Iron","Hemoglobin","RNA","DNA"]
				},
				{
					"question" : "How many permanent teeth does a typical adult human have?",
					"correct":"32",
					"options":["24","30","42","32"]
				},
				{
					"question" : "How many canine teeth does the typical human adult have?",
					"correct":"4",
					"options":["2","4","8","12"]
				},
				{
					"question" : "Most of the heart is composed of which of the following types of tissues : ",
					"correct":"muscle",
					"options":["epithelial","connective","nervous","muscle"]
				},
				{
					"question" : "In the taxonomical name Homo sapiens, what taxonomical rank does sapiens represent?",
					"correct":"Species",
					"options":["Kingdom","Phylum","Genus","Species"]
				},
				{
					"question" : "Which of the following can sometimes result after a moderate to severe blow to the head ?",
					"correct":"concussion",
					"options":["Down syndrome","meningitis","impetigo","concussion"]
				},
				{	
					"question" : "Which of the following is the most common source of energy for brain cells in humans?",
					"correct":"glucose",
					"options":["nucleic acids","proteins","glucose","pectins"]
				},
				{
					"question" : "Which of the following terms is used by microbiologists for a bacterium with a rod shape ?",
					"correct":"bacillus",
					"options":["tubular","bacillus","trichome","cylindrical"]
				},
				{
					"question" : "If an animal has 42 chromosomes in its normal, non-gamete or somatic cells, what term would be given to the gametes that have 21 chromosomes ?",
					"correct":"haploid",
					"options":["somatic","unigentic","haploid","solitary"]
				}
			]
	},
	{
		"category":"Space",
		"questions":
			[
				{
					"question" : "Which are the most common types of galaxies in the universe?",
					"correct":"Elliptical",
					"options":["Spiral","Elliptical","Parabolic","Hyperbolic"]
				},
				{
					"question" : "Where is the coldest place in the universe ?",
					"correct":"Boomerang Nebula",
					"options":["Boomerang Nebula","Outer Asteroid Belt","Inside a black hole","Milky Way"]
				},
				{
					"question" : "Which constellation holds the hottest place in the universe ? ",
					"correct":"Virgo",
					"options":["Libra","Draco","Virgo","Leo"]
				},
				{
					"question" : "How old is the universe ?",
					"correct":"13.8 billion years old",
					"options":["14 billion years old","13 billion years old","14.8 billion years old","13.8 billion years old"]
				},
				{
					"question" : "How much of the universe is composed of dark matter ?",
					"correct":"38%",
					"options":["25%","27%","38%","48%"]
				},
				{
					"question" : "What is the most common type of star found in the Milky Way ?",
					"correct":"Red Dwarf",
					"options":["Red Dwarf","Red Giant","White Giant","Black Hole"]
				},
				{
					"question" : "What are the largest stars in the universe ?",
					"correct":"Red Giant",
					"options":["Red Dwarf","Red Giant","White Giant","Black Hole"]
				},
				{
					"question" : "What has an incredibly strong gravitational pull that light can’t even escape ?",
					"correct":"Black Holes",
					"options":["Nebula","Grey Matter","Red Matter","Black Holes"]
				},
				{
					"question" : "How many moons are currently in our solar system? ",
					"correct":"181",
					"options":["194","188","181","157"]
				},
				{
					"question" : "What is the name of the planet that rotates on the opposite side of the sun from our solar system ? ",
					"correct":"Planet X",
					"options":["Planet Z","Planet X","Planet Y","Planet W"]
				}
			]
	},
	{
		"category":"Earth Science",
		"questions":
			[
				{
					"question" : "What is the general name for the rising and falling of sea levels in response to the forces exerted by the Moon and Sun?",
					"correct":"Waves",
					"options":["Riptides","Tides","Waves","Tsunami Waves"]
				},
				{
					"question" : "Approximately what fraction of Earth’s surface is covered by oceans ?",
					"correct":"seven-tenths",
					"options":["one-half","two-thirds","seven-tenths","four-fifths"]
				},
				{
					"question" : "Which of the following clouds has little vertical development ?",
					"correct":"cirrus",
					"options":["altostratus","altocumulus","cirrus","nimbostratus"]
				},
				{
					"question" : "A weather forecast of 100% relative humidity suggests an increased possibility of ?",
					"correct":"rain",
					"options":["rain","wind","rising temperature","drying conditions"]
				},
				{
					"question" : "Which of the following fossils is the oldest ?",
					"correct":"trilobite",
					"options":["trilobite","snake","petrified wood","megalodon tooth"]
				},
				{
					"question" : "Which of the following is the hottest region of planet Earth ?",
					"correct":"the inner core","options":["the mantle","the inner core","the outer core","the crust"]
				},
				{
					"question" : "Which of the following is the BEST example of the chemical weathering of rock ?",
					"correct":"rain percolating through limestone",
					"options":["cracking of rock by plant roots","rain percolating through limestone","frost action","abrasion"]
				},
				{
					"question" : "Which of the following is often the LEAST reliable property of a mineral that is used in mineral identification ?",
					"correct":"color",
					"options":["magnetism","specific gravity","color","cleavage"]
				},
				{
					"question" : "Which of the following is a coastal morphology most characteristic of the west coast of the U.S ?",
					"correct":"rocky coast with small spits and pocket beaches",
					"options":["numerous estuaries","depositional coast","extensive barrier islands","rocky coast with small spits and pocket beaches"]
				},
				{
					"question" : "The greatest geophysical impacts from the movement of Earth’s lithospheric plates are most often seen and felt in which of the following areas ?",
					"correct":"at plate boundaries",
					"options":["at the center of the plates","at plate boundaries","evenly distributed throughout the entire plate","along riverbeds within the plates"]
				}
			]
	},
	{
		"category":"Maths",
		"questions":
			[
				{
					"question" : "How many degrees are in one-third of a right angle ?",
					"correct":"30",
					"options":["30","60","25","45"]
				},
				{
					"question" : "Round the number 535,279 to the nearest ten-thousand ?",
					"correct":"540,000",
					"options":["535,000","500,000","540,000","600,000"]
				},
				{
					"question" : "In a right triangle, what is the name for the side opposite the 90º angle ?",
					"correct":"Hypotenuse",
					"options":["Adjacent","Opposite","Hypotenuse","Right"]
				},
				{
					"question" : "Rounded to the nearest meter, find the length of the hypotenuse of a right triangle if the legs measure 5 and 12 meters ?",
					"correct":"13",
					"options":["13","16","14","15"]
				},
				{
					"question" : "Minuends and subtrahends are used in which of the following mathematical operations ?",
					"correct":"subtraction",
					"options":["addition","subtraction","multiplication","division"]
				},
				{
					"question" : "What is the degree measure of a semicircle ?",
					"correct":"180",
					"options":["360","90","180","120"]
				},
				{
					"question" : "How many degrees are in the 4th angle of a quadrilateral whose other 3 angles are 85º, 95º, and 100º ?",
					"correct":"80",
					"options":["80","75","85","70"]
				},
				{
					"question" : "In the real numbers, a number times its multiplicative inverse equals what ?",
					"correct":"1",
					"options":["-1","1","-1/2","1/2"]
				},
				{
					"question" : "What is the least common denominator of the following 3 fractions: 2/3, 5/6, 1/5 ?",
					"correct":"30",
					"options":["15","18","24","30"]
				},
				{
					"question" : "Which of the following is NOT true ?",
					"correct":"fractions equal to 1 are called mixed fractions",
					"options":["an irrational number is one that cannot be expressed as the ratio of integers","fractions equal to 1 are called mixed fractions","the numerator is less than the denominator in a proper fraction","a composite number is a positive integer greater than 1 that is not prime"]
				}
				
		]
	}
];
class Exam extends Component{

constructor(props){
    super(props)

    this.state = {
        category : '',
        ename : '',
    }  
}
handleSubmit = (e)=>{
    this.setState({ [e.target.name]: e.target.value}); 
    e.preventDefault();
}
render(){
    return(<React.Fragment>
			<h2>Welcome online Exam</h2>
            <form onSubmit={this.handleSubmit}>
                <select name = "categories" name="category" onChange={(e)=>this.handleSubmit(e)}>
                {
                    data.map(categories=> <option value={categories.category}>{categories.category}</option>)
                }
                </select>  
            </form>
			<div>
				{
                  data.map(record=>{
						if(record.category===this.state.category){
							return <Questions questions = {record.questions}></Questions>	
						}
					})
                }	
			</div>   
        </React.Fragment>
        )
}
   
}export default Exam;