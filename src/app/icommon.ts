export interface ICommon {
    title : string;
    id: number;
  name: string;
  description: string;
}

export interface IFeedback {
id: number;
name: string;
emailId: string;
title : string;
description: string;
carName: string;
}

export interface Vehicle {
  id: string
  highlights: string[]
  stories: Story[]
  __fakeVehicle: FakeVehicle
}
export interface Story {
  id: string
  title: string
  claims: string[]
  contextualContent: ContextualContent[]
  relatedStories: any[]
}
export interface ContextualContent {
  label: string
  value: string
}
export interface FakeVehicle {
  vin: string
  make: string
  model: string
  year: number
  drivetrain: string
  transmission: string
  color: string
  interiorColor: string
  price: number
  avgMarketPrice: number
  odometer: number
  cityMpg: number
  highwayMpg: number
  passengerSpace: number
  carfaxReport: string
  carfaxOneOwner: boolean
  carfaxAccidentFree: boolean
}