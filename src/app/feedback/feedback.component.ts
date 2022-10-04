import { Component, OnInit } from '@angular/core';
import { IFeedback } from '../icommon';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})

export class FeedbackComponent implements OnInit {
  feedback_title = 'Vehicle Feedback Board';
  feedback_desc = 'Share the feedback of your vehicle and help others to choose the best vehicle for them.';
  heroes = Feedbacks;
  selectedHero?: IFeedback;

  constructor() { }

  ngOnInit(): void {
  }
  onSelect(hero: IFeedback): void {
    this.selectedHero = hero;
  }

}

const Feedbacks: IFeedback[] = [
  { 
    id: 1,
    name: 'John',
    emailId: 'John@gmail.com',
    title : 'Car with Best Engine',
    description: '2022 Jeep Compass Limited Billet Silver Metallic Clearcoat 2.4L I4 22/30 City/Highway MPG This Jeep Compass is well equipped and includes these key features and benefits, Quick Order Package 2GG. Based upon current new inventory shortages, deals subject to dealer approval based upon trade, loyalty, and proximity to dealership. Price is after all applicable rebates. Customer must qualify. Price does not include Tax, Title, Registration or Doc Fee. See Dealer for Details. Customer may need to finance with Chrysler Capital Finance to qualify for rebate.$1000 - 2022 National Retail Consumer Cash (Type 1/B) 22CN1. Exp. 10/03/2022 $1000 - Denver BC Chrysler Capital Bonus DECN5. Exp. 10/03/2022',
    carName: '2022 Jeep Compass Limited 4dr SUV 4WD'
  },
  { 
    id: 2,
    name: 'William',
    emailId: 'William@gmail.com',
    title : 'Car with Best Performance',
    description: 'The 2019 Honda Fit won the U.S. News and World Report “Best New Cars for Teens Under $20,000” award. The Honda Sensing® suite of safety and driver assistive technologies, available on all trims and standard on EX and above, was recognized as adding an important level of peace of mind for parents.',
    carName: '2019 Honda Fit Sport 4dr Hatchback'
  },
  { 
    id: 3,
    name: 'Simon',
    emailId: 'Simon@gmail.com',
    title : 'Car with Best Mileage',
    description: 'The standard choice is a 2.5-liter engine with 181 horsepower and 181 pound-feet of torque. Options are available for 1.5 and 2.0-liter EcoBoost® engines while Hybrid and Plug-In Hybrid engines ensure you can go the distance with fewer stops at the gas pump. All-wheel drive is available only with the 2.0-liter engine.',
    carName: '2020 Ford Fusion SE 4dr Sedan'
  },
  { 
    id: 4,
    name: 'Stark',
    emailId: 'Stark@gmail.com',
    title : 'Best Family Car',
    description: '2015 Volkswagen Golf is having ample of space which makes it a comfortable family car. It is a quality car, a fun car, a grown-up car -- a C-segment vehicle that can instill pride of ownership without breaking the bank. And thats why its the 2015 Motor Trend Car of the Year.',
    carName: '2015 Volkswagen Golf'
  },
  { 
    id: 5,
    name: 'Johnson',
    emailId: 'Johnson@gmail.com',
    title : 'Car with best handling',
    description: 'The 2021 Mustang Mach-E has claimed a number of other awards including Car and Drivers Editors Choice Award and Electric Vehicle of the Year Award, plus the Cars.com Eco-Friendly Car of the Year Award, AutoGuides Utility of the Year, Green Vehicle of the Year and Autoweeks Car Buyers Award',
    carName: '2021 Mustang Mach-E'
  }, 
];
