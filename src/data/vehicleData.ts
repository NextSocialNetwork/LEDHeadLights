/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { VehicleFitment } from '../types';

export interface AutomotiveGroup {
  name: string;
  category: 'Mainstream & Trucks' | 'Luxury & Ultra-Luxury' | 'Electric & Specialty';
  parentCompany: string;
  brands: string[];
  description: string;
}

export const AUTOMOTIVE_GROUPS: AutomotiveGroup[] = [
  // --- Mainstream & Trucks ---
  {
    name: 'Toyota & Lexus',
    category: 'Mainstream & Trucks',
    parentCompany: 'Toyota Motor Corp.',
    brands: ['Toyota', 'Lexus', 'Scion'],
    description: 'World renowned reliability with predominant H11 low beams and 9005 high beams.'
  },
  {
    name: 'Honda & Acura',
    category: 'Mainstream & Trucks',
    parentCompany: 'Honda Motor Co.',
    brands: ['Honda', 'Acura'],
    description: 'Precision Japanese engineering utilizing H11, 9006, 9005 and classic H4 dual-beam sockets.'
  },
  {
    name: 'Ford & Lincoln',
    category: 'Mainstream & Trucks',
    parentCompany: 'Ford Motor Company',
    brands: ['Ford', 'Lincoln'],
    description: 'America\'s top selling trucks and SUVs utilizing high-power H11, 9005, H13, and H7 sockets.'
  },
  {
    name: 'General Motors',
    category: 'Mainstream & Trucks',
    parentCompany: 'General Motors (GM)',
    brands: ['Chevrolet', 'GMC', 'Buick', 'Cadillac', 'Pontiac', 'Saturn'],
    description: 'Heavy duty trucks and sedans utilizing 9006, H11, 9005, and H7 Euro-platform sockets.'
  },
  {
    name: 'Volkswagen Group (Mainstream)',
    category: 'Mainstream & Trucks',
    parentCompany: 'Volkswagen Group',
    brands: ['VW'],
    description: 'German engineering benchmark utilizing H7 Direct Plug and H7 Wire Extension bulbs.'
  },
  {
    name: 'Hyundai Motor Group',
    category: 'Mainstream & Trucks',
    parentCompany: 'Hyundai Motor Group',
    brands: ['Hyundai', 'Kia', 'Genesis'],
    description: 'Rapidly growing Asian automotive giant utilizing H7, H11, 9005, and H8 sockets.'
  },
  {
    name: 'Renault-Nissan-Mitsubishi',
    category: 'Mainstream & Trucks',
    parentCompany: 'Renault-Nissan-Mitsubishi Alliance',
    brands: ['Nissan', 'Infiniti', 'Mitsubishi'],
    description: 'Global alliance vehicles utilizing H11 low beams, 9005 high beams, and H4 dual-beam trucks.'
  },
  {
    name: 'Subaru',
    category: 'Mainstream & Trucks',
    parentCompany: 'Subaru Corporation (Independent)',
    brands: ['Subaru'],
    description: 'Symmetrical AWD platforms utilizing H11 low beams, 9005 high beams, and H8/H11 fogs.'
  },
  {
    name: 'Mazda',
    category: 'Mainstream & Trucks',
    parentCompany: 'Mazda Motor Corporation (Independent)',
    brands: ['Mazda'],
    description: 'Kodo design performance vehicles utilizing H11, H7, 9005, and H4 dual-beam sockets.'
  },
  {
    name: 'Stellantis (American)',
    category: 'Mainstream & Trucks',
    parentCompany: 'Stellantis N.V.',
    brands: ['Chrysler', 'Dodge', 'Jeep', 'Ram'],
    description: 'High-power American muscle and 4x4s utilizing 9006, 9005, 9012, H11, and H4 sockets.'
  },

  // --- Luxury & Ultra-Luxury ---
  {
    name: 'Mercedes-Benz Group',
    category: 'Luxury & Ultra-Luxury',
    parentCompany: 'Mercedes-Benz Group AG',
    brands: ['Mercedes-Benz', 'Maybach'],
    description: 'Prestige German luxury utilizing H7 Direct Plug and H7 Wire Extension projector setups.'
  },
  {
    name: 'BMW Group',
    category: 'Luxury & Ultra-Luxury',
    parentCompany: 'BMW Group',
    brands: ['BMW', 'Mini', 'Rolls-Royce'],
    description: 'Ultimate driving machines utilizing H7 low/high beams and H8 angel eyes.'
  },
  {
    name: 'Volkswagen Luxury Group',
    category: 'Luxury & Ultra-Luxury',
    parentCompany: 'Volkswagen Group',
    brands: ['Audi', 'Porsche', 'Bentley', 'Lamborghini', 'Bugatti'],
    description: 'World-leading supercar & luxury platforms utilizing H7, H11, and H8 precision optical sockets.'
  },
  {
    name: 'Geely Luxury & Performance',
    category: 'Luxury & Ultra-Luxury',
    parentCompany: 'Zhejiang Geely Holding Group',
    brands: ['Volvo', 'Polestar', 'Lotus'],
    description: 'Scandinavian safety and British sports engineering utilizing H7 and H11 bulb sockets.'
  },
  {
    name: 'Jaguar Land Rover (JLR)',
    category: 'Luxury & Ultra-Luxury',
    parentCompany: 'Tata Motors',
    brands: ['Jaguar', 'Land Rover'],
    description: 'British luxury SUVs and sports cars utilizing H7 low beams and H11 fog lights.'
  },
  {
    name: 'Stellantis Italian Luxury',
    category: 'Luxury & Ultra-Luxury',
    parentCompany: 'Stellantis N.V.',
    brands: ['Maserati', 'Alfa Romeo'],
    description: 'Exotic Italian styling and racing heritage utilizing H7 and H11 LED systems.'
  },
  {
    name: 'Aston Martin',
    category: 'Luxury & Ultra-Luxury',
    parentCompany: 'Aston Martin Lagonda (Independent/Public)',
    brands: ['Aston Martin'],
    description: 'Handcrafted British grand tourers utilizing H7 high/low and H11 auxiliary sockets.'
  },

  // --- Electric-First & Specialty ---
  {
    name: 'Tesla',
    category: 'Electric & Specialty',
    parentCompany: 'Tesla Inc. (Independent/Public)',
    brands: ['Tesla'],
    description: 'Pioneering American electric vehicles with auxiliary H11 and H7 projector specifications.'
  },
  {
    name: 'Rivian',
    category: 'Electric & Specialty',
    parentCompany: 'Rivian Automotive (Independent)',
    brands: ['Rivian'],
    description: 'Electric adventure trucks and SUVs utilizing H11 fog and auxiliary projector retrofits.'
  },
  {
    name: 'Lucid Motors',
    category: 'Electric & Specialty',
    parentCompany: 'Lucid Group Inc.',
    brands: ['Lucid'],
    description: 'Ultra-efficient luxury EVs utilizing precision H7 and H11 optical assemblies.'
  },
  {
    name: 'Ferrari',
    category: 'Electric & Specialty',
    parentCompany: 'Ferrari N.V. (Independent/Public)',
    brands: ['Ferrari'],
    description: 'Italian supercar benchmark utilizing H7 projector beams and H11 auxiliary lamps.'
  },
  {
    name: 'McLaren',
    category: 'Electric & Specialty',
    parentCompany: 'McLaren Group (Independent/Public)',
    brands: ['McLaren'],
    description: 'Formula 1 inspired carbon fiber supercars utilizing H7 and H11 projector units.'
  },
  {
    name: 'Global EV Leaders (BYD, NIO, XPeng)',
    category: 'Electric & Specialty',
    parentCompany: 'Global EV Manufacturers',
    brands: ['BYD', 'NIO', 'XPeng'],
    description: 'Next-generation electric sedans and SUVs utilizing standardized H7 and H11 LED systems.'
  }
];

export const POPULAR_VEHICLE_DATABASE: VehicleFitment[] = [
  // =========================================================================
  // 1. TOYOTA MOTOR CORP. (Toyota, Lexus, Scion)
  // =========================================================================
  { make: 'Toyota', model: 'Camry (2012-2024)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Toyota Motor Corp.', category: 'Mainstream & Trucks' },
  { make: 'Toyota', model: 'Camry (2007-2011)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Toyota Motor Corp.', category: 'Mainstream & Trucks' },
  { make: 'Toyota', model: 'Camry (2002-2006)', low: '9006', high: '9005', fog: '9006', parentGroup: 'Toyota Motor Corp.', category: 'Mainstream & Trucks' },
  { make: 'Toyota', model: 'Corolla (2014-2024)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Toyota Motor Corp.', category: 'Mainstream & Trucks' },
  { make: 'Toyota', model: 'Corolla (2009-2013)', low: '9006', high: '9005', fog: 'H11', parentGroup: 'Toyota Motor Corp.', category: 'Mainstream & Trucks' },
  { make: 'Toyota', model: 'Corolla (2003-2008)', low: '9006', high: '9005', fog: '9006', parentGroup: 'Toyota Motor Corp.', category: 'Mainstream & Trucks' },
  { make: 'Toyota', model: 'RAV4 (2013-2024)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Toyota Motor Corp.', category: 'Mainstream & Trucks' },
  { make: 'Toyota', model: 'RAV4 (2006-2012)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Toyota Motor Corp.', category: 'Mainstream & Trucks' },
  { make: 'Toyota', model: 'Tacoma (2016-2023)', low: 'H11', high: '9005 / H9', fog: 'H11', parentGroup: 'Toyota Motor Corp.', category: 'Mainstream & Trucks' },
  { make: 'Toyota', model: 'Tacoma (2005-2015)', low: 'H4', high: 'H4', fog: 'H11', parentGroup: 'Toyota Motor Corp.', category: 'Mainstream & Trucks' },
  { make: 'Toyota', model: 'Tacoma (1995-2004)', low: 'H4', high: 'H4', fog: 'H3', parentGroup: 'Toyota Motor Corp.', category: 'Mainstream & Trucks' },
  { make: 'Toyota', model: 'Tundra (2014-2021)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Toyota Motor Corp.', category: 'Mainstream & Trucks' },
  { make: 'Toyota', model: 'Tundra (2007-2013)', low: 'H4', high: 'H4', fog: 'H11', parentGroup: 'Toyota Motor Corp.', category: 'Mainstream & Trucks' },
  { make: 'Toyota', model: '4Runner (2014-2024)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Toyota Motor Corp.', category: 'Mainstream & Trucks' },
  { make: 'Toyota', model: '4Runner (2006-2013)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Toyota Motor Corp.', category: 'Mainstream & Trucks' },
  { make: 'Toyota', model: '4Runner (1999-2005)', low: '9006', high: '9005', fog: '9006', parentGroup: 'Toyota Motor Corp.', category: 'Mainstream & Trucks' },
  { make: 'Toyota', model: 'Highlander (2014-2022)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Toyota Motor Corp.', category: 'Mainstream & Trucks' },
  { make: 'Toyota', model: 'Highlander (2008-2013)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Toyota Motor Corp.', category: 'Mainstream & Trucks' },
  { make: 'Toyota', model: 'Sienna (2011-2020)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Toyota Motor Corp.', category: 'Mainstream & Trucks' },
  { make: 'Toyota', model: 'Prius (2010-2015)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Toyota Motor Corp.', category: 'Mainstream & Trucks' },
  { make: 'Toyota', model: 'Prius (2004-2009)', low: 'H4', high: 'H4', fog: '9006', parentGroup: 'Toyota Motor Corp.', category: 'Mainstream & Trucks' },
  { make: 'Toyota', model: 'Avalon (2013-2018)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Toyota Motor Corp.', category: 'Mainstream & Trucks' },
  { make: 'Toyota', model: 'Sequoia (2008-2022)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Toyota Motor Corp.', category: 'Mainstream & Trucks' },
  { make: 'Toyota', model: 'Matrix (2003-2014)', low: '9006', high: '9005', fog: 'H11', parentGroup: 'Toyota Motor Corp.', category: 'Mainstream & Trucks' },

  // LEXUS (Toyota Motor Corp.)
  { make: 'Lexus', model: 'IS250 / IS350 (2006-2013)', low: 'H11', high: '9005', fog: '9006 / H11', parentGroup: 'Toyota Motor Corp.', category: 'Luxury & Ultra-Luxury' },
  { make: 'Lexus', model: 'IS300 (2001-2005)', low: '9006', high: '9005', fog: '9006', parentGroup: 'Toyota Motor Corp.', category: 'Luxury & Ultra-Luxury' },
  { make: 'Lexus', model: 'ES350 (2007-2018)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Toyota Motor Corp.', category: 'Luxury & Ultra-Luxury' },
  { make: 'Lexus', model: 'ES300 / ES330 (1997-2006)', low: '9006', high: '9005', fog: '9006 / H3', parentGroup: 'Toyota Motor Corp.', category: 'Luxury & Ultra-Luxury' },
  { make: 'Lexus', model: 'RX350 (2007-2015)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Toyota Motor Corp.', category: 'Luxury & Ultra-Luxury' },
  { make: 'Lexus', model: 'RX300 / RX330 (1999-2006)', low: '9006', high: '9005', fog: '9006', parentGroup: 'Toyota Motor Corp.', category: 'Luxury & Ultra-Luxury' },
  { make: 'Lexus', model: 'GS350 / GS300 (2006-2011)', low: 'H11', high: '9005', fog: '9006 / H11', parentGroup: 'Toyota Motor Corp.', category: 'Luxury & Ultra-Luxury' },
  { make: 'Lexus', model: 'GX460 (2010-2023)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Toyota Motor Corp.', category: 'Luxury & Ultra-Luxury' },
  { make: 'Lexus', model: 'GX470 (2003-2009)', low: 'H11', high: '9005', fog: '9006', parentGroup: 'Toyota Motor Corp.', category: 'Luxury & Ultra-Luxury' },
  { make: 'Lexus', model: 'LX570 (2008-2021)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Toyota Motor Corp.', category: 'Luxury & Ultra-Luxury' },
  { make: 'Lexus', model: 'NX200t / NX300 (2015-2021)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Toyota Motor Corp.', category: 'Luxury & Ultra-Luxury' },
  { make: 'Lexus', model: 'CT200h (2011-2017)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Toyota Motor Corp.', category: 'Luxury & Ultra-Luxury' },

  // SCION (Toyota Motor Corp.)
  { make: 'Scion', model: 'tC (2005-2016)', low: '9006 / H11', high: '9005', fog: 'H11', parentGroup: 'Toyota Motor Corp.', category: 'Mainstream & Trucks' },
  { make: 'Scion', model: 'FR-S (2013-2016)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Toyota Motor Corp.', category: 'Mainstream & Trucks' },
  { make: 'Scion', model: 'xB (2004-2015)', low: '9006 / H11', high: '9005', fog: 'H11', parentGroup: 'Toyota Motor Corp.', category: 'Mainstream & Trucks' },

  // =========================================================================
  // 2. HONDA MOTOR CO. (Honda, Acura)
  // =========================================================================
  { make: 'Honda', model: 'Civic (2016-2021 Gen 10)', low: 'H11', high: '9005', fog: 'H8 / H11', parentGroup: 'Honda Motor Co.', category: 'Mainstream & Trucks' },
  { make: 'Honda', model: 'Civic (2006-2015 Gen 8/9)', low: '9006', high: '9005', fog: 'H11', parentGroup: 'Honda Motor Co.', category: 'Mainstream & Trucks' },
  { make: 'Honda', model: 'Civic (1996-2005 Gen 6/7)', low: 'H4', high: 'H4', fog: 'H3', parentGroup: 'Honda Motor Co.', category: 'Mainstream & Trucks' },
  { make: 'Honda', model: 'Accord (2013-2022 Gen 9/10)', low: 'H11', high: '9005', fog: 'H11 / H8', parentGroup: 'Honda Motor Co.', category: 'Mainstream & Trucks' },
  { make: 'Honda', model: 'Accord (2008-2012 Gen 8)', low: '9006', high: '9005', fog: 'H11', parentGroup: 'Honda Motor Co.', category: 'Mainstream & Trucks' },
  { make: 'Honda', model: 'Accord (1998-2007 Gen 6/7)', low: '9006', high: '9005', fog: '9006 / H11', parentGroup: 'Honda Motor Co.', category: 'Mainstream & Trucks' },
  { make: 'Honda', model: 'CR-V (2012-2022 Gen 4/5)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Honda Motor Co.', category: 'Mainstream & Trucks' },
  { make: 'Honda', model: 'CR-V (2007-2011 Gen 3)', low: 'H4', high: 'H4', fog: 'H11', parentGroup: 'Honda Motor Co.', category: 'Mainstream & Trucks' },
  { make: 'Honda', model: 'CR-V (1997-2006 Gen 1/2)', low: 'H4', high: 'H4', fog: 'H3', parentGroup: 'Honda Motor Co.', category: 'Mainstream & Trucks' },
  { make: 'Honda', model: 'Pilot (2016-2022 Gen 3)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Honda Motor Co.', category: 'Mainstream & Trucks' },
  { make: 'Honda', model: 'Pilot (2003-2015 Gen 1/2)', low: 'H11 / H4', high: '9005 / H4', fog: 'H11', parentGroup: 'Honda Motor Co.', category: 'Mainstream & Trucks' },
  { make: 'Honda', model: 'Odyssey (2011-2023)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Honda Motor Co.', category: 'Mainstream & Trucks' },
  { make: 'Honda', model: 'Odyssey (2005-2010)', low: '9006', high: '9005', fog: '9006', parentGroup: 'Honda Motor Co.', category: 'Mainstream & Trucks' },
  { make: 'Honda', model: 'Ridgeline (2017-2024)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Honda Motor Co.', category: 'Mainstream & Trucks' },
  { make: 'Honda', model: 'Ridgeline (2006-2014)', low: 'H4', high: 'H4', fog: '9006', parentGroup: 'Honda Motor Co.', category: 'Mainstream & Trucks' },
  { make: 'Honda', model: 'Fit (2007-2020)', low: 'H4', high: 'H4', fog: 'H11', parentGroup: 'Honda Motor Co.', category: 'Mainstream & Trucks' },
  { make: 'Honda', model: 'HR-V (2016-2022)', low: 'H4', high: 'H4', fog: 'H8 / H11', parentGroup: 'Honda Motor Co.', category: 'Mainstream & Trucks' },
  { make: 'Honda', model: 'Element (2003-2011)', low: 'H4', high: 'H4', fog: 'H11', parentGroup: 'Honda Motor Co.', category: 'Mainstream & Trucks' },
  { make: 'Honda', model: 'S2000 (2000-2009)', low: 'H1 / D2S', high: 'H1', fog: 'H11', parentGroup: 'Honda Motor Co.', category: 'Mainstream & Trucks' },

  // ACURA (Honda Motor Co.)
  { make: 'Acura', model: 'MDX (2007-2020)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Honda Motor Co.', category: 'Luxury & Ultra-Luxury' },
  { make: 'Acura', model: 'RDX (2007-2018)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Honda Motor Co.', category: 'Luxury & Ultra-Luxury' },
  { make: 'Acura', model: 'TL (2004-2014)', low: 'H11 / D2S', high: '9005', fog: 'H11', parentGroup: 'Honda Motor Co.', category: 'Luxury & Ultra-Luxury' },
  { make: 'Acura', model: 'TSX (2004-2014)', low: 'H11 / D2S', high: '9005', fog: 'H11', parentGroup: 'Honda Motor Co.', category: 'Luxury & Ultra-Luxury' },
  { make: 'Acura', model: 'ILX (2013-2018)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Honda Motor Co.', category: 'Luxury & Ultra-Luxury' },
  { make: 'Acura', model: 'Integra (1994-2001)', low: '9006', high: '9005', fog: 'H3', parentGroup: 'Honda Motor Co.', category: 'Luxury & Ultra-Luxury' },
  { make: 'Acura', model: 'RSX (2002-2006)', low: 'H1', high: 'H1', fog: 'H11', parentGroup: 'Honda Motor Co.', category: 'Luxury & Ultra-Luxury' },

  // =========================================================================
  // 3. FORD MOTOR COMPANY (Ford, Lincoln)
  // =========================================================================
  { make: 'Ford', model: 'F-150 (2015-2020)', low: 'H11', high: '9005', fog: '9005 / H11', parentGroup: 'Ford Motor Company', category: 'Mainstream & Trucks' },
  { make: 'Ford', model: 'F-150 (2004-2014)', low: 'H13', high: 'H13', fog: '9005 / 9140', parentGroup: 'Ford Motor Company', category: 'Mainstream & Trucks' },
  { make: 'Ford', model: 'F-150 (1997-2003)', low: '9007', high: '9007', fog: '9145', parentGroup: 'Ford Motor Company', category: 'Mainstream & Trucks' },
  { make: 'Ford', model: 'F-250 / F-350 Super Duty (2017-2022)', low: 'H13', high: 'H13', fog: 'H11', parentGroup: 'Ford Motor Company', category: 'Mainstream & Trucks' },
  { make: 'Ford', model: 'F-250 / F-350 Super Duty (2005-2016)', low: 'H13', high: 'H13', fog: '9145', parentGroup: 'Ford Motor Company', category: 'Mainstream & Trucks' },
  { make: 'Ford', model: 'Mustang (2015-2023)', low: 'D3S / LED', high: 'LED', fog: 'H11', parentGroup: 'Ford Motor Company', category: 'Mainstream & Trucks' },
  { make: 'Ford', model: 'Mustang (2005-2014)', low: 'H13', high: 'H13', fog: 'H11 / 9145', parentGroup: 'Ford Motor Company', category: 'Mainstream & Trucks' },
  { make: 'Ford', model: 'Mustang (1999-2004)', low: '9007', high: '9007', fog: '9145 / 880', parentGroup: 'Ford Motor Company', category: 'Mainstream & Trucks' },
  { make: 'Ford', model: 'Explorer (2011-2019)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Ford Motor Company', category: 'Mainstream & Trucks' },
  { make: 'Ford', model: 'Explorer (2002-2010)', low: '9006', high: '9005', fog: '9145', parentGroup: 'Ford Motor Company', category: 'Mainstream & Trucks' },
  { make: 'Ford', model: 'Escape (2013-2019)', low: 'H9 / H11', high: '9005', fog: 'H11', parentGroup: 'Ford Motor Company', category: 'Mainstream & Trucks' },
  { make: 'Ford', model: 'Escape (2001-2012)', low: 'H13 / H4', high: 'H13 / H4', fog: 'H11', parentGroup: 'Ford Motor Company', category: 'Mainstream & Trucks' },
  { make: 'Ford', model: 'Edge (2015-2023)', low: 'H11 / 9005', high: '9005', fog: 'H11', parentGroup: 'Ford Motor Company', category: 'Mainstream & Trucks' },
  { make: 'Ford', model: 'Edge (2007-2014)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Ford Motor Company', category: 'Mainstream & Trucks' },
  { make: 'Ford', model: 'Fusion (2013-2020)', low: 'H7', high: 'H7', fog: 'H11', parentGroup: 'Ford Motor Company', category: 'Mainstream & Trucks' },
  { make: 'Ford', model: 'Fusion (2006-2012)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Ford Motor Company', category: 'Mainstream & Trucks' },
  { make: 'Ford', model: 'Focus (2012-2018)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Ford Motor Company', category: 'Mainstream & Trucks' },
  { make: 'Ford', model: 'Focus (2000-2011)', low: 'H4 / H13', high: 'H4 / H13', fog: 'H11', parentGroup: 'Ford Motor Company', category: 'Mainstream & Trucks' },
  { make: 'Ford', model: 'Ranger (2019-2023)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Ford Motor Company', category: 'Mainstream & Trucks' },
  { make: 'Ford', model: 'Ranger (1998-2011)', low: '9007', high: '9007', fog: '9145', parentGroup: 'Ford Motor Company', category: 'Mainstream & Trucks' },
  { make: 'Ford', model: 'Expedition (2007-2017)', low: 'H13', high: 'H13', fog: '9145', parentGroup: 'Ford Motor Company', category: 'Mainstream & Trucks' },
  { make: 'Ford', model: 'Taurus (2010-2019)', low: '9005', high: '9005', fog: 'H11', parentGroup: 'Ford Motor Company', category: 'Mainstream & Trucks' },
  { make: 'Ford', model: 'Crown Victoria (1998-2011)', low: '9007', high: '9007', fog: '9145', parentGroup: 'Ford Motor Company', category: 'Mainstream & Trucks' },

  // LINCOLN (Ford Motor Company)
  { make: 'Lincoln', model: 'Navigator (2007-2017)', low: 'H13', high: 'H13', fog: '9145', parentGroup: 'Ford Motor Company', category: 'Luxury & Ultra-Luxury' },
  { make: 'Lincoln', model: 'MKZ (2013-2020)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Ford Motor Company', category: 'Luxury & Ultra-Luxury' },
  { make: 'Lincoln', model: 'MKX (2007-2015)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Ford Motor Company', category: 'Luxury & Ultra-Luxury' },
  { make: 'Lincoln', model: 'Town Car (1998-2011)', low: '9007', high: '9007', fog: '9145', parentGroup: 'Ford Motor Company', category: 'Luxury & Ultra-Luxury' },
  { make: 'Lincoln', model: 'Aviator (2020-2024)', low: 'H11 / LED', high: '9005', fog: 'H11', parentGroup: 'Ford Motor Company', category: 'Luxury & Ultra-Luxury' },
  { make: 'Lincoln', model: 'Continental (2017-2020)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Ford Motor Company', category: 'Luxury & Ultra-Luxury' },

  // =========================================================================
  // 4. GENERAL MOTORS (Chevrolet, GMC, Buick, Cadillac, Pontiac, Saturn)
  // =========================================================================
  { make: 'Chevrolet', model: 'Silverado 1500 (2014-2019)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },
  { make: 'Chevrolet', model: 'Silverado 1500 (2007-2013)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },
  { make: 'Chevrolet', model: 'Silverado 1500 (1999-2006)', low: '9006', high: '9005', fog: '880 / 9145', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },
  { make: 'Chevrolet', model: 'Tahoe / Suburban (2015-2020)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },
  { make: 'Chevrolet', model: 'Tahoe / Suburban (2007-2014)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },
  { make: 'Chevrolet', model: 'Tahoe / Suburban (2000-2006)', low: '9006', high: '9005', fog: '880', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },
  { make: 'Chevrolet', model: 'Equinox (2010-2017)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },
  { make: 'Chevrolet', model: 'Malibu (2013-2022)', low: 'H11', high: 'H7 / 9005', fog: 'H11', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },
  { make: 'Chevrolet', model: 'Impala (2014-2020)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },
  { make: 'Chevrolet', model: 'Impala (2006-2013)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },
  { make: 'Chevrolet', model: 'Camaro (2010-2015)', low: 'H13', high: 'H13', fog: 'H11', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },
  { make: 'Chevrolet', model: 'Cruze (2011-2019)', low: 'H13 / H11', high: 'H13 / 9005', fog: 'H11', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },
  { make: 'Chevrolet', model: 'Colorado (2015-2022)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },
  { make: 'Chevrolet', model: 'Traverse (2013-2023)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },

  // GMC (General Motors)
  { make: 'GMC', model: 'Sierra 1500 (2014-2019)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },
  { make: 'GMC', model: 'Sierra 1500 (2007-2013)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },
  { make: 'GMC', model: 'Sierra 1500 (1999-2006)', low: '9006', high: '9005', fog: '880 / 9145', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },
  { make: 'GMC', model: 'Sierra 2500 / 3500 HD (2015-2019)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },
  { make: 'GMC', model: 'Yukon / Yukon XL (2015-2020)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },
  { make: 'GMC', model: 'Yukon / Yukon XL (2007-2014)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },
  { make: 'GMC', model: 'Yukon / Yukon XL (2000-2006)', low: '9006', high: '9005', fog: '880', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },
  { make: 'GMC', model: 'Acadia (2013-2023)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },
  { make: 'GMC', model: 'Acadia (2007-2012)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },
  { make: 'GMC', model: 'Terrain (2010-2023)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },
  { make: 'GMC', model: 'Canyon (2015-2022)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },
  { make: 'GMC', model: 'Envoy (2002-2009)', low: '9006', high: '9005', fog: '880', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },
  { make: 'GMC', model: 'Savana Van (2003-2024)', low: 'H4', high: 'H4', fog: '9145', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },

  // BUICK (General Motors)
  { make: 'Buick', model: 'LaCrosse (2010-2019)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },
  { make: 'Buick', model: 'LaCrosse (2005-2009)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },
  { make: 'Buick', model: 'LeSabre (2000-2005)', low: '9006', high: '9005', fog: '880 / H11', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },
  { make: 'Buick', model: 'Enclave (2008-2024)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },
  { make: 'Buick', model: 'Regal (2011-2017)', low: 'H7', high: 'H7', fog: 'H11', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },
  { make: 'Buick', model: 'Encore (2013-2022)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },
  { make: 'Buick', model: 'Lucerne (2006-2011)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },
  { make: 'Buick', model: 'Century (1997-2005)', low: '9006', high: '9005', fog: '880', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },
  { make: 'Buick', model: 'Verano (2012-2017)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },
  { make: 'Buick', model: 'Rendezvous (2002-2007)', low: '9006', high: '9005', fog: '880', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },

  // CADILLAC (General Motors)
  { make: 'Cadillac', model: 'Escalade (2007-2014)', low: 'H11', high: '9005', fog: 'H11 / 5202', parentGroup: 'General Motors', category: 'Luxury & Ultra-Luxury' },
  { make: 'Cadillac', model: 'CTS (2008-2014)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'General Motors', category: 'Luxury & Ultra-Luxury' },
  { make: 'Cadillac', model: 'ATS (2013-2019)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'General Motors', category: 'Luxury & Ultra-Luxury' },
  { make: 'Cadillac', model: 'SRX (2010-2016)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'General Motors', category: 'Luxury & Ultra-Luxury' },
  { make: 'Cadillac', model: 'DTS / DeVille (2000-2011)', low: '9006', high: '9005', fog: 'H11', parentGroup: 'General Motors', category: 'Luxury & Ultra-Luxury' },

  // PONTIAC (General Motors Legacy)
  { make: 'Pontiac', model: 'Grand Prix (2004-2008)', low: 'H11', high: '9005', fog: 'H11 / 880', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },
  { make: 'Pontiac', model: 'Grand Prix (1997-2003)', low: '9006', high: '9005', fog: '880', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },
  { make: 'Pontiac', model: 'G6 (2005-2010)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },
  { make: 'Pontiac', model: 'Grand Am (1999-2005)', low: '9006', high: '9005', fog: '880', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },
  { make: 'Pontiac', model: 'Torrent (2006-2009)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },
  { make: 'Pontiac', model: 'Bonneville (2000-2005)', low: '9006', high: '9005', fog: '880', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },
  { make: 'Pontiac', model: 'Firebird / Trans Am (1998-2002)', low: '9006', high: '9005', fog: '880', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },
  { make: 'Pontiac', model: 'Vibe (2003-2010)', low: '9006 / H11', high: '9005', fog: 'H11', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },
  { make: 'Pontiac', model: 'G8 (2008-2009)', low: 'H7', high: 'H7', fog: 'H11', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },
  { make: 'Pontiac', model: 'Montana (1999-2006)', low: '9006', high: '9005', fog: '880', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },
  { make: 'Pontiac', model: 'Solstice (2006-2009)', low: 'H13', high: 'H13', fog: 'H11', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },

  // SATURN (General Motors Legacy)
  { make: 'Saturn', model: 'Vue (2002-2010)', low: '9006 / H11', high: '9005', fog: 'H11', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },
  { make: 'Saturn', model: 'Aura (2007-2010)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },
  { make: 'Saturn', model: 'Ion (2003-2007)', low: '9006', high: '9005', fog: '880', parentGroup: 'General Motors', category: 'Mainstream & Trucks' },

  // =========================================================================
  // 5. VOLKSWAGEN GROUP (VW, Audi, Porsche, Bentley, Lamborghini, Bugatti)
  // =========================================================================
  { make: 'VW', model: 'Jetta (Mk6 / Mk7 2011-2024)', low: 'H7', high: 'H7', fog: 'H8 / H11', parentGroup: 'Volkswagen Group', category: 'Mainstream & Trucks' },
  { make: 'VW', model: 'Jetta (Mk4 / Mk5 1999-2010)', low: 'H7', high: '9007 / H7', fog: 'H3 / H11', parentGroup: 'Volkswagen Group', category: 'Mainstream & Trucks' },
  { make: 'VW', model: 'Golf / GTI (Mk7 / Mk8 2015-2024)', low: 'H7', high: 'H7', fog: 'H8 / H11', parentGroup: 'Volkswagen Group', category: 'Mainstream & Trucks' },
  { make: 'VW', model: 'Golf / GTI (Mk5 / Mk6 2006-2014)', low: 'H7', high: 'H7', fog: 'H11 / HB4', parentGroup: 'Volkswagen Group', category: 'Mainstream & Trucks' },
  { make: 'VW', model: 'Passat (2012-2022)', low: 'H7', high: 'H7', fog: 'H8 / H11', parentGroup: 'Volkswagen Group', category: 'Mainstream & Trucks' },
  { make: 'VW', model: 'Passat (2001-2011)', low: 'H7', high: 'H7', fog: 'H3 / H11', parentGroup: 'Volkswagen Group', category: 'Mainstream & Trucks' },
  { make: 'VW', model: 'Tiguan (2009-2024)', low: 'H7', high: 'H7', fog: 'H11 / H8', parentGroup: 'Volkswagen Group', category: 'Mainstream & Trucks' },
  { make: 'VW', model: 'Atlas (2018-2024)', low: 'H7', high: 'H7', fog: 'H11', parentGroup: 'Volkswagen Group', category: 'Mainstream & Trucks' },
  { make: 'VW', model: 'Beetle (2012-2019)', low: 'H7', high: 'H7', fog: 'H11', parentGroup: 'Volkswagen Group', category: 'Mainstream & Trucks' },
  { make: 'VW', model: 'New Beetle (1998-2011)', low: 'H1 / H7', high: 'H1', fog: 'H1 / H3', parentGroup: 'Volkswagen Group', category: 'Mainstream & Trucks' },
  { make: 'VW', model: 'CC (2009-2017)', low: 'H7', high: 'H7', fog: 'H11', parentGroup: 'Volkswagen Group', category: 'Mainstream & Trucks' },
  { make: 'VW', model: 'Touareg (2004-2017)', low: 'H7', high: 'H7', fog: 'H11', parentGroup: 'Volkswagen Group', category: 'Mainstream & Trucks' },
  { make: 'VW', model: 'Taos (2022-2024)', low: 'H7', high: 'H7', fog: 'H8', parentGroup: 'Volkswagen Group', category: 'Mainstream & Trucks' },

  // AUDI (Volkswagen Group)
  { make: 'Audi', model: 'A4 / S4 (B8 / B9 2009-2024)', low: 'H7', high: 'H7', fog: 'H11 / H8', parentGroup: 'Volkswagen Group', category: 'Luxury & Ultra-Luxury' },
  { make: 'Audi', model: 'A4 / S4 (B6 / B7 2002-2008)', low: 'H7', high: 'H7', fog: 'H11', parentGroup: 'Volkswagen Group', category: 'Luxury & Ultra-Luxury' },
  { make: 'Audi', model: 'A4 (B5 1996-2001)', low: 'H7', high: 'H7', fog: 'H7 / H3', parentGroup: 'Volkswagen Group', category: 'Luxury & Ultra-Luxury' },
  { make: 'Audi', model: 'A6 / S6 (C6 / C7 2005-2018)', low: 'H7', high: 'H7', fog: 'H11 / H7', parentGroup: 'Volkswagen Group', category: 'Luxury & Ultra-Luxury' },
  { make: 'Audi', model: 'A3 / S3 (8P / 8V 2006-2020)', low: 'H7', high: 'H7', fog: 'H11', parentGroup: 'Volkswagen Group', category: 'Luxury & Ultra-Luxury' },
  { make: 'Audi', model: 'Q5 (2009-2024)', low: 'H7', high: 'H7', fog: 'H11', parentGroup: 'Volkswagen Group', category: 'Luxury & Ultra-Luxury' },
  { make: 'Audi', model: 'Q7 (2007-2024)', low: 'H7', high: 'H7', fog: 'H11', parentGroup: 'Volkswagen Group', category: 'Luxury & Ultra-Luxury' },
  { make: 'Audi', model: 'TT (Mk1 / Mk2 2000-2014)', low: 'H7', high: 'H1 / H7', fog: 'H3 / H11', parentGroup: 'Volkswagen Group', category: 'Luxury & Ultra-Luxury' },
  { make: 'Audi', model: 'A5 / S5 (2008-2020)', low: 'H7', high: 'H7', fog: 'H11', parentGroup: 'Volkswagen Group', category: 'Luxury & Ultra-Luxury' },
  { make: 'Audi', model: 'Q3 (2015-2024)', low: 'H7', high: 'H7', fog: 'H11', parentGroup: 'Volkswagen Group', category: 'Luxury & Ultra-Luxury' },

  // PORSCHE (Volkswagen Group)
  { make: 'Porsche', model: 'Cayenne (2003-2017)', low: 'H7', high: 'H7', fog: 'H11', parentGroup: 'Volkswagen Group', category: 'Luxury & Ultra-Luxury' },
  { make: 'Porsche', model: 'Macan (2015-2020)', low: 'H7', high: 'H7', fog: 'H11', parentGroup: 'Volkswagen Group', category: 'Luxury & Ultra-Luxury' },
  { make: 'Porsche', model: 'Boxster / Cayman (986/987 1997-2012)', low: 'H7', high: 'H7', fog: 'H3 / H8', parentGroup: 'Volkswagen Group', category: 'Luxury & Ultra-Luxury' },
  { make: 'Porsche', model: '911 Carrera (996 / 997 1999-2012)', low: 'H7', high: 'H7', fog: 'H3 / H8', parentGroup: 'Volkswagen Group', category: 'Luxury & Ultra-Luxury' },
  { make: 'Porsche', model: 'Panamera (2010-2016)', low: 'H7 / D1S', high: 'H7', fog: 'H11', parentGroup: 'Volkswagen Group', category: 'Luxury & Ultra-Luxury' },

  // BENTLEY (Volkswagen Group)
  { make: 'Bentley', model: 'Continental GT (2003-2018)', low: 'H7 / D1S', high: 'H7', fog: 'H11', parentGroup: 'Volkswagen Group', category: 'Luxury & Ultra-Luxury' },
  { make: 'Bentley', model: 'Flying Spur (2005-2019)', low: 'H7', high: 'H7', fog: 'H11', parentGroup: 'Volkswagen Group', category: 'Luxury & Ultra-Luxury' },

  // LAMBORGHINI (Volkswagen Group)
  { make: 'Lamborghini', model: 'Gallardo (2004-2014)', low: 'H7 / D2S', high: 'H7', fog: 'H11', parentGroup: 'Volkswagen Group', category: 'Luxury & Ultra-Luxury' },
  { make: 'Lamborghini', model: 'Huracán (2015-2024)', low: 'H7 / LED', high: 'H7', fog: 'H11', parentGroup: 'Volkswagen Group', category: 'Luxury & Ultra-Luxury' },
  { make: 'Lamborghini', model: 'Urus (2018-2024)', low: 'H7 / LED', high: 'H7', fog: 'H11', parentGroup: 'Volkswagen Group', category: 'Luxury & Ultra-Luxury' },

  // BUGATTI (Volkswagen Group)
  { make: 'Bugatti', model: 'Veyron 16.4 (2005-2015)', low: 'H7 / Xenon', high: 'H7', fog: 'H11', parentGroup: 'Volkswagen Group', category: 'Luxury & Ultra-Luxury' },

  // =========================================================================
  // 6. HYUNDAI MOTOR GROUP (Hyundai, Kia, Genesis)
  // =========================================================================
  { make: 'Hyundai', model: 'Elantra (2011-2020)', low: 'H7', high: '9005 / H7', fog: 'H8', parentGroup: 'Hyundai Motor Group', category: 'Mainstream & Trucks' },
  { make: 'Hyundai', model: 'Sonata (2011-2019)', low: 'H7', high: '9005 / H7', fog: 'H8', parentGroup: 'Hyundai Motor Group', category: 'Mainstream & Trucks' },
  { make: 'Hyundai', model: 'Santa Fe (2013-2020)', low: 'H7', high: 'H7', fog: 'H8 / H11', parentGroup: 'Hyundai Motor Group', category: 'Mainstream & Trucks' },
  { make: 'Hyundai', model: 'Tucson (2016-2021)', low: 'H7', high: '9005', fog: 'H8', parentGroup: 'Hyundai Motor Group', category: 'Mainstream & Trucks' },
  { make: 'Hyundai', model: 'Palisade (2020-2024)', low: 'H7 / 9005', high: '9005', fog: 'H11', parentGroup: 'Hyundai Motor Group', category: 'Mainstream & Trucks' },
  { make: 'Hyundai', model: 'Genesis Coupe (2010-2016)', low: 'H7', high: 'H7', fog: 'H11', parentGroup: 'Hyundai Motor Group', category: 'Mainstream & Trucks' },
  { make: 'Hyundai', model: 'Veloster (2012-2021)', low: 'H7', high: 'H7', fog: 'H8', parentGroup: 'Hyundai Motor Group', category: 'Mainstream & Trucks' },

  // KIA (Hyundai Motor Group)
  { make: 'Kia', model: 'Optima / K5 (2011-2020)', low: 'H7', high: '9005', fog: 'H8 / H11', parentGroup: 'Hyundai Motor Group', category: 'Mainstream & Trucks' },
  { make: 'Kia', model: 'Forte (2014-2021)', low: 'H7', high: '9005', fog: 'H8 / H11', parentGroup: 'Hyundai Motor Group', category: 'Mainstream & Trucks' },
  { make: 'Kia', model: 'Sorento (2011-2020)', low: 'H7', high: 'H7', fog: 'H8 / H11', parentGroup: 'Hyundai Motor Group', category: 'Mainstream & Trucks' },
  { make: 'Kia', model: 'Soul (2014-2021)', low: 'H7', high: 'H7', fog: 'H8', parentGroup: 'Hyundai Motor Group', category: 'Mainstream & Trucks' },
  { make: 'Kia', model: 'Sportage (2011-2021)', low: 'H7', high: '9005 / H7', fog: 'H8', parentGroup: 'Hyundai Motor Group', category: 'Mainstream & Trucks' },
  { make: 'Kia', model: 'Telluride (2020-2024)', low: 'H7 / 9005', high: '9005', fog: 'H11', parentGroup: 'Hyundai Motor Group', category: 'Mainstream & Trucks' },
  { make: 'Kia', model: 'Stinger (2018-2023)', low: 'H7 / D1S', high: '9005', fog: 'H11', parentGroup: 'Hyundai Motor Group', category: 'Mainstream & Trucks' },

  // GENESIS (Hyundai Motor Group)
  { make: 'Genesis', model: 'G70 (2019-2023)', low: 'H7 / H11', high: '9005', fog: 'H11', parentGroup: 'Hyundai Motor Group', category: 'Luxury & Ultra-Luxury' },
  { make: 'Genesis', model: 'G80 (2017-2020)', low: 'H7 / H11', high: '9005', fog: 'H11', parentGroup: 'Hyundai Motor Group', category: 'Luxury & Ultra-Luxury' },
  { make: 'Genesis', model: 'G90 (2017-2022)', low: 'H7 / H11', high: '9005', fog: 'H11', parentGroup: 'Hyundai Motor Group', category: 'Luxury & Ultra-Luxury' },
  { make: 'Genesis', model: 'GV70 / GV80 (2021-2024)', low: 'H7 / LED', high: '9005', fog: 'H11', parentGroup: 'Hyundai Motor Group', category: 'Luxury & Ultra-Luxury' },

  // =========================================================================
  // 7. RENAULT-NISSAN-MITSUBISHI (Nissan, Infiniti, Mitsubishi)
  // =========================================================================
  { make: 'Nissan', model: 'Altima (2013-2024)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Renault-Nissan-Mitsubishi', category: 'Mainstream & Trucks' },
  { make: 'Nissan', model: 'Altima (2007-2012)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Renault-Nissan-Mitsubishi', category: 'Mainstream & Trucks' },
  { make: 'Nissan', model: 'Altima (2002-2006)', low: '9006', high: '9005', fog: 'H11', parentGroup: 'Renault-Nissan-Mitsubishi', category: 'Mainstream & Trucks' },
  { make: 'Nissan', model: 'Rogue (2014-2024)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Renault-Nissan-Mitsubishi', category: 'Mainstream & Trucks' },
  { make: 'Nissan', model: 'Rogue (2008-2013)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Renault-Nissan-Mitsubishi', category: 'Mainstream & Trucks' },
  { make: 'Nissan', model: 'Sentra (2013-2024)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Renault-Nissan-Mitsubishi', category: 'Mainstream & Trucks' },
  { make: 'Nissan', model: 'Sentra (2007-2012)', low: 'H13', high: 'H13', fog: 'H11', parentGroup: 'Renault-Nissan-Mitsubishi', category: 'Mainstream & Trucks' },
  { make: 'Nissan', model: 'Maxima (2009-2023)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Renault-Nissan-Mitsubishi', category: 'Mainstream & Trucks' },
  { make: 'Nissan', model: 'Pathfinder (2013-2024)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Renault-Nissan-Mitsubishi', category: 'Mainstream & Trucks' },
  { make: 'Nissan', model: 'Murano (2009-2024)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Renault-Nissan-Mitsubishi', category: 'Mainstream & Trucks' },
  { make: 'Nissan', model: 'Frontier (2005-2024)', low: 'H4', high: 'H4', fog: 'H11', parentGroup: 'Renault-Nissan-Mitsubishi', category: 'Mainstream & Trucks' },
  { make: 'Nissan', model: 'Titan (2004-2024)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Renault-Nissan-Mitsubishi', category: 'Mainstream & Trucks' },
  { make: 'Nissan', model: '350Z (2003-2009)', low: 'H7 / D2R', high: 'H7', fog: 'H1', parentGroup: 'Renault-Nissan-Mitsubishi', category: 'Mainstream & Trucks' },
  { make: 'Nissan', model: '370Z (2009-2020)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Renault-Nissan-Mitsubishi', category: 'Mainstream & Trucks' },
  { make: 'Nissan', model: 'Versa (2007-2024)', low: 'H4', high: 'H4', fog: 'H11', parentGroup: 'Renault-Nissan-Mitsubishi', category: 'Mainstream & Trucks' },
  { make: 'Nissan', model: 'Armada (2004-2024)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Renault-Nissan-Mitsubishi', category: 'Mainstream & Trucks' },
  { make: 'Nissan', model: 'Xterra (2005-2015)', low: 'H4', high: 'H4', fog: 'H11', parentGroup: 'Renault-Nissan-Mitsubishi', category: 'Mainstream & Trucks' },

  // INFINITI (Renault-Nissan-Mitsubishi)
  { make: 'Infiniti', model: 'G37 / G25 (2008-2013)', low: 'H1 / D2S', high: '9005', fog: 'H11', parentGroup: 'Renault-Nissan-Mitsubishi', category: 'Luxury & Ultra-Luxury' },
  { make: 'Infiniti', model: 'G35 (2003-2007)', low: '9006 / D2R', high: '9005 / H1', fog: 'H1', parentGroup: 'Renault-Nissan-Mitsubishi', category: 'Luxury & Ultra-Luxury' },
  { make: 'Infiniti', model: 'Q50 (2014-2024)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Renault-Nissan-Mitsubishi', category: 'Luxury & Ultra-Luxury' },
  { make: 'Infiniti', model: 'Q60 (2014-2022)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Renault-Nissan-Mitsubishi', category: 'Luxury & Ultra-Luxury' },
  { make: 'Infiniti', model: 'QX60 / JX35 (2013-2021)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Renault-Nissan-Mitsubishi', category: 'Luxury & Ultra-Luxury' },
  { make: 'Infiniti', model: 'FX35 / FX37 (2009-2013)', low: 'H11 / D2S', high: '9005', fog: 'H11', parentGroup: 'Renault-Nissan-Mitsubishi', category: 'Luxury & Ultra-Luxury' },
  { make: 'Infiniti', model: 'QX80 / QX56 (2011-2023)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Renault-Nissan-Mitsubishi', category: 'Luxury & Ultra-Luxury' },
  { make: 'Infiniti', model: 'M35 / M37 / M45 (2006-2013)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Renault-Nissan-Mitsubishi', category: 'Luxury & Ultra-Luxury' },

  // MITSUBISHI (Renault-Nissan-Mitsubishi)
  { make: 'Mitsubishi', model: 'Outlander (2014-2024)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Renault-Nissan-Mitsubishi', category: 'Mainstream & Trucks' },
  { make: 'Mitsubishi', model: 'Outlander (2007-2013)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Renault-Nissan-Mitsubishi', category: 'Mainstream & Trucks' },
  { make: 'Mitsubishi', model: 'Outlander Sport (2011-2023)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Renault-Nissan-Mitsubishi', category: 'Mainstream & Trucks' },
  { make: 'Mitsubishi', model: 'Lancer (2008-2017)', low: '9006 / H13', high: '9005', fog: 'H11', parentGroup: 'Renault-Nissan-Mitsubishi', category: 'Mainstream & Trucks' },
  { make: 'Mitsubishi', model: 'Lancer Evolution (Evo 8/9/10)', low: '9006 / D2S', high: '9005', fog: 'H11', parentGroup: 'Renault-Nissan-Mitsubishi', category: 'Mainstream & Trucks' },
  { make: 'Mitsubishi', model: 'Eclipse (2006-2012)', low: 'H13', high: 'H13', fog: 'H11', parentGroup: 'Renault-Nissan-Mitsubishi', category: 'Mainstream & Trucks' },
  { make: 'Mitsubishi', model: 'Eclipse (2000-2005)', low: '9006', high: '9005', fog: 'H3', parentGroup: 'Renault-Nissan-Mitsubishi', category: 'Mainstream & Trucks' },

  // =========================================================================
  // 8. SUBARU (Independent / Public)
  // =========================================================================
  { make: 'Subaru', model: 'Outback (2015-2024)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Subaru Corporation', category: 'Mainstream & Trucks' },
  { make: 'Subaru', model: 'Forester (2014-2023)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Subaru Corporation', category: 'Mainstream & Trucks' },
  { make: 'Subaru', model: 'Crosstrek (2013-2023)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Subaru Corporation', category: 'Mainstream & Trucks' },
  { make: 'Subaru', model: 'WRX / STI (2015-2021)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Subaru Corporation', category: 'Mainstream & Trucks' },
  { make: 'Subaru', model: 'Impreza (2012-2022)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Subaru Corporation', category: 'Mainstream & Trucks' },
  { make: 'Subaru', model: 'Legacy (2010-2022)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Subaru Corporation', category: 'Mainstream & Trucks' },
  { make: 'Subaru', model: 'Ascent (2019-2024)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Subaru Corporation', category: 'Mainstream & Trucks' },
  { make: 'Subaru', model: 'BRZ (2013-2020)', low: 'H11 / D4S', high: '9005', fog: 'H11', parentGroup: 'Subaru Corporation', category: 'Mainstream & Trucks' },

  // =========================================================================
  // 9. MAZDA (Independent / Public)
  // =========================================================================
  { make: 'Mazda', model: 'Mazda 3 (2014-2020)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Mazda Motor Corporation', category: 'Mainstream & Trucks' },
  { make: 'Mazda', model: 'Mazda 6 (2014-2021)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Mazda Motor Corporation', category: 'Mainstream & Trucks' },
  { make: 'Mazda', model: 'CX-5 (2013-2021)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Mazda Motor Corporation', category: 'Mainstream & Trucks' },
  { make: 'Mazda', model: 'Miata MX-5 (2006-2015 NC)', low: 'H7', high: '9005', fog: 'H11', parentGroup: 'Mazda Motor Corporation', category: 'Mainstream & Trucks' },
  { make: 'Mazda', model: 'Miata MX-5 (1990-2005 NA/NB)', low: 'H4', high: 'H4', fog: 'H3', parentGroup: 'Mazda Motor Corporation', category: 'Mainstream & Trucks' },
  { make: 'Mazda', model: 'CX-9 (2007-2015)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Mazda Motor Corporation', category: 'Mainstream & Trucks' },

  // =========================================================================
  // 10. STELLANTIS AMERICAN (Chrysler, Dodge, Jeep, Ram)
  // =========================================================================
  { make: 'Chrysler', model: '300 / 300C (2015-2023)', low: '9005 / 9012', high: '9005', fog: 'H11', parentGroup: 'Stellantis', category: 'Mainstream & Trucks' },
  { make: 'Chrysler', model: '300 / 300C (2011-2014)', low: '9012 / 9006', high: '9005', fog: 'H11', parentGroup: 'Stellantis', category: 'Mainstream & Trucks' },
  { make: 'Chrysler', model: '300 / 300C (2005-2010)', low: '9006', high: '9005', fog: 'H11', parentGroup: 'Stellantis', category: 'Mainstream & Trucks' },
  { make: 'Chrysler', model: 'Town & Country (2008-2016)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Stellantis', category: 'Mainstream & Trucks' },
  { make: 'Chrysler', model: 'Pacifica (2017-2024)', low: 'H11 / 9005', high: '9005', fog: 'H11', parentGroup: 'Stellantis', category: 'Mainstream & Trucks' },
  { make: 'Chrysler', model: '200 (2015-2017)', low: '9005', high: '9005', fog: 'H11', parentGroup: 'Stellantis', category: 'Mainstream & Trucks' },
  { make: 'Chrysler', model: '200 (2011-2014)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Stellantis', category: 'Mainstream & Trucks' },
  { make: 'Chrysler', model: 'PT Cruiser (2001-2010)', low: '9006', high: '9005', fog: '9006', parentGroup: 'Stellantis', category: 'Mainstream & Trucks' },

  // DODGE (Stellantis)
  { make: 'Dodge', model: 'Ram 1500 (2013-2018 / Classic)', low: 'H11 / 9012', high: '9005', fog: 'H11', parentGroup: 'Stellantis', category: 'Mainstream & Trucks' },
  { make: 'Dodge', model: 'Ram 1500 (2009-2012 Quad)', low: 'H11', high: '9005', fog: '9145 / H11', parentGroup: 'Stellantis', category: 'Mainstream & Trucks' },
  { make: 'Dodge', model: 'Ram 1500 (2002-2008)', low: 'H13', high: 'H13', fog: '9006', parentGroup: 'Stellantis', category: 'Mainstream & Trucks' },
  { make: 'Dodge', model: 'Charger (2015-2023)', low: '9005', high: '9005', fog: 'H11', parentGroup: 'Stellantis', category: 'Mainstream & Trucks' },
  { make: 'Dodge', model: 'Charger (2006-2014)', low: '9006 / 9012', high: '9005', fog: 'H11', parentGroup: 'Stellantis', category: 'Mainstream & Trucks' },
  { make: 'Dodge', model: 'Challenger (2008-2023)', low: 'H11 / 9012', high: '9005', fog: 'H11', parentGroup: 'Stellantis', category: 'Mainstream & Trucks' },
  { make: 'Dodge', model: 'Durango (2014-2024)', low: '9005 / 9012', high: '9005', fog: 'H11', parentGroup: 'Stellantis', category: 'Mainstream & Trucks' },
  { make: 'Dodge', model: 'Durango (2004-2013)', low: 'H13 / 9006', high: 'H13 / 9005', fog: 'H11', parentGroup: 'Stellantis', category: 'Mainstream & Trucks' },
  { make: 'Dodge', model: 'Grand Caravan (2011-2020)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Stellantis', category: 'Mainstream & Trucks' },
  { make: 'Dodge', model: 'Grand Caravan (2001-2010)', low: 'H13 / 9007', high: 'H13', fog: '9006', parentGroup: 'Stellantis', category: 'Mainstream & Trucks' },
  { make: 'Dodge', model: 'Dart (2013-2016)', low: '9012 / 9005', high: '9005', fog: 'H11', parentGroup: 'Stellantis', category: 'Mainstream & Trucks' },
  { make: 'Dodge', model: 'Journey (2009-2020)', low: '9006 / 9012', high: '9005', fog: 'H11', parentGroup: 'Stellantis', category: 'Mainstream & Trucks' },
  { make: 'Dodge', model: 'Avenger (2008-2014)', low: '9006', high: '9005', fog: 'H11', parentGroup: 'Stellantis', category: 'Mainstream & Trucks' },

  // JEEP (Stellantis)
  { make: 'Jeep', model: 'Grand Cherokee (2011-2021)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Stellantis', category: 'Mainstream & Trucks' },
  { make: 'Jeep', model: 'Grand Cherokee (1999-2010)', low: '9006 / 9005', high: '9005', fog: '9145', parentGroup: 'Stellantis', category: 'Mainstream & Trucks' },
  { make: 'Jeep', model: 'Wrangler (TJ / JK 1997-2018)', low: 'H4', high: 'H4', fog: 'H16 / 5202', parentGroup: 'Stellantis', category: 'Mainstream & Trucks' },
  { make: 'Jeep', model: 'Cherokee (2014-2022)', low: '9012 / H11', high: '9005', fog: 'H11', parentGroup: 'Stellantis', category: 'Mainstream & Trucks' },
  { make: 'Jeep', model: 'Compass (2011-2021)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Stellantis', category: 'Mainstream & Trucks' },
  { make: 'Jeep', model: 'Renegade (2015-2022)', low: 'H13', high: 'H13', fog: 'H11', parentGroup: 'Stellantis', category: 'Mainstream & Trucks' },
  { make: 'Jeep', model: 'Patriot (2007-2017)', low: 'H13', high: 'H13', fog: 'H11', parentGroup: 'Stellantis', category: 'Mainstream & Trucks' },

  // RAM (Stellantis)
  { make: 'Ram', model: '1500 (2019-2024 Quad/Reflector)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Stellantis', category: 'Mainstream & Trucks' },
  { make: 'Ram', model: '2500 / 3500 (2013-2024)', low: 'H11', high: '9005', fog: 'H11', parentGroup: 'Stellantis', category: 'Mainstream & Trucks' },
  { make: 'Ram', model: 'ProMaster Van (2014-2024)', low: 'H7', high: 'H7', fog: 'H11', parentGroup: 'Stellantis', category: 'Mainstream & Trucks' },

  // =========================================================================
  // 11. MERCEDES-BENZ GROUP (Mercedes-Benz, Maybach)
  // =========================================================================
  { make: 'Mercedes-Benz', model: 'C-Class (W205 2015-2021)', low: 'H7', high: 'H7', fog: 'H11', parentGroup: 'Mercedes-Benz Group AG', category: 'Luxury & Ultra-Luxury' },
  { make: 'Mercedes-Benz', model: 'C-Class (W204 2008-2014)', low: 'H7', high: 'H7', fog: 'H11', parentGroup: 'Mercedes-Benz Group AG', category: 'Luxury & Ultra-Luxury' },
  { make: 'Mercedes-Benz', model: 'C-Class (W203 2001-2007)', low: 'H7', high: 'H7', fog: '9006 / H11', parentGroup: 'Mercedes-Benz Group AG', category: 'Luxury & Ultra-Luxury' },
  { make: 'Mercedes-Benz', model: 'E-Class (W212 2010-2016)', low: 'H7', high: 'H7', fog: 'H11', parentGroup: 'Mercedes-Benz Group AG', category: 'Luxury & Ultra-Luxury' },
  { make: 'Mercedes-Benz', model: 'E-Class (W211 2003-2009)', low: 'H7', high: 'H7', fog: 'H11', parentGroup: 'Mercedes-Benz Group AG', category: 'Luxury & Ultra-Luxury' },
  { make: 'Mercedes-Benz', model: 'CLA-Class (C117 2014-2019)', low: 'H7', high: 'H7', fog: 'H11', parentGroup: 'Mercedes-Benz Group AG', category: 'Luxury & Ultra-Luxury' },
  { make: 'Mercedes-Benz', model: 'GLA-Class (X156 2015-2020)', low: 'H7', high: 'H7', fog: 'H11', parentGroup: 'Mercedes-Benz Group AG', category: 'Luxury & Ultra-Luxury' },
  { make: 'Mercedes-Benz', model: 'GLC-Class (X253 2016-2022)', low: 'H7', high: 'H7', fog: 'H11', parentGroup: 'Mercedes-Benz Group AG', category: 'Luxury & Ultra-Luxury' },
  { make: 'Mercedes-Benz', model: 'ML / GLE-Class (W164/W166 2006-2018)', low: 'H7', high: 'H7', fog: 'H11', parentGroup: 'Mercedes-Benz Group AG', category: 'Luxury & Ultra-Luxury' },
  { make: 'Mercedes-Benz', model: 'GL / GLS-Class (X164/X166 2007-2019)', low: 'H7', high: 'H7', fog: 'H11', parentGroup: 'Mercedes-Benz Group AG', category: 'Luxury & Ultra-Luxury' },
  { make: 'Mercedes-Benz', model: 'Sprinter (2007-2024)', low: 'H7', high: 'H7', fog: 'H11', parentGroup: 'Mercedes-Benz Group AG', category: 'Luxury & Ultra-Luxury' },
  { make: 'Mercedes-Benz', model: 'S-Class (W220 / W221 2000-2013)', low: 'H7', high: 'H7', fog: 'H1 / H11', parentGroup: 'Mercedes-Benz Group AG', category: 'Luxury & Ultra-Luxury' },
  { make: 'Maybach', model: 'S550 / S580 / S650 (2015-2024)', low: 'H7 / LED', high: 'H7', fog: 'H11 / H8', parentGroup: 'Mercedes-Benz Group AG', category: 'Luxury & Ultra-Luxury' },

  // =========================================================================
  // 12. BMW GROUP (BMW, Mini, Rolls-Royce)
  // =========================================================================
  { make: 'BMW', model: '3-Series (F30 2012-2018)', low: 'H7', high: 'H7', fog: 'H8 / H11', parentGroup: 'BMW Group', category: 'Luxury & Ultra-Luxury' },
  { make: 'BMW', model: '3-Series (E90 / E92 2006-2011)', low: 'H7', high: 'H7', fog: 'H11 / H8', parentGroup: 'BMW Group', category: 'Luxury & Ultra-Luxury' },
  { make: 'BMW', model: '3-Series (E46 1999-2005)', low: 'H7', high: 'H7', fog: '9006 / H11', parentGroup: 'BMW Group', category: 'Luxury & Ultra-Luxury' },
  { make: 'BMW', model: '3-Series (E36 1992-1998)', low: 'H1 / 9006', high: 'H1 / 9005', fog: 'H1', parentGroup: 'BMW Group', category: 'Luxury & Ultra-Luxury' },
  { make: 'BMW', model: '5-Series (F10 2011-2016)', low: 'H7', high: 'H7', fog: 'H8 / H11', parentGroup: 'BMW Group', category: 'Luxury & Ultra-Luxury' },
  { make: 'BMW', model: '5-Series (E60 2004-2010)', low: 'H7', high: 'H7', fog: 'H8 / H11', parentGroup: 'BMW Group', category: 'Luxury & Ultra-Luxury' },
  { make: 'BMW', model: '5-Series (E39 1997-2003)', low: 'H7', high: '9005', fog: 'H7 / 9006', parentGroup: 'BMW Group', category: 'Luxury & Ultra-Luxury' },
  { make: 'BMW', model: '1-Series (E82 / E88 2008-2013)', low: 'H7', high: 'H7', fog: 'H11', parentGroup: 'BMW Group', category: 'Luxury & Ultra-Luxury' },
  { make: 'BMW', model: 'X3 (E83 / F25 2004-2017)', low: 'H7', high: 'H7', fog: 'H11', parentGroup: 'BMW Group', category: 'Luxury & Ultra-Luxury' },
  { make: 'BMW', model: 'X5 (E53 / E70 2000-2013)', low: 'H7', high: 'H7', fog: 'H11 / 9006', parentGroup: 'BMW Group', category: 'Luxury & Ultra-Luxury' },
  { make: 'BMW', model: '4-Series (F32 / F36 2014-2020)', low: 'H7', high: 'H7', fog: 'H8', parentGroup: 'BMW Group', category: 'Luxury & Ultra-Luxury' },
  { make: 'BMW', model: 'Z4 (E85 / E89 2003-2016)', low: 'H7', high: 'H7', fog: 'H11', parentGroup: 'BMW Group', category: 'Luxury & Ultra-Luxury' },

  // MINI (BMW Group)
  { make: 'Mini', model: 'Cooper / Cooper S (R56 / F56 2007-2023)', low: 'H4 / H7', high: 'H4 / H7', fog: 'H8 / H11', parentGroup: 'BMW Group', category: 'Luxury & Ultra-Luxury' },
  { make: 'Mini', model: 'Countryman (2011-2024)', low: 'H7', high: 'H7', fog: 'H8 / H11', parentGroup: 'BMW Group', category: 'Luxury & Ultra-Luxury' },

  // ROLLS-ROYCE (BMW Group)
  { make: 'Rolls-Royce', model: 'Ghost / Phantom / Wraith (2010-2024)', low: 'H7 / LED', high: 'H7', fog: 'H8 / H11', parentGroup: 'BMW Group', category: 'Luxury & Ultra-Luxury' },

  // =========================================================================
  // 13. ZHEJIANG GEELY HOLDING GROUP (Volvo, Polestar, Lotus)
  // =========================================================================
  { make: 'Volvo', model: 'XC90 (2003-2014)', low: 'H7', high: 'H7', fog: 'H1', parentGroup: 'Zhejiang Geely Holding Group', category: 'Luxury & Ultra-Luxury' },
  { make: 'Volvo', model: 'XC60 (2010-2017)', low: 'H7', high: 'H7', fog: 'H11', parentGroup: 'Zhejiang Geely Holding Group', category: 'Luxury & Ultra-Luxury' },
  { make: 'Volvo', model: 'S60 / V60 (2011-2018)', low: 'H7', high: 'H7', fog: 'H11', parentGroup: 'Zhejiang Geely Holding Group', category: 'Luxury & Ultra-Luxury' },
  { make: 'Volvo', model: 'S40 / V50 (2004-2012)', low: 'H7', high: 'H7', fog: 'H11', parentGroup: 'Zhejiang Geely Holding Group', category: 'Luxury & Ultra-Luxury' },
  { make: 'Volvo', model: 'XC70 (2001-2016)', low: 'H7', high: 'H7', fog: 'H1', parentGroup: 'Zhejiang Geely Holding Group', category: 'Luxury & Ultra-Luxury' },

  // POLESTAR (Geely Holding)
  { make: 'Polestar', model: 'Polestar 1 & 2 (2020-2024)', low: 'H7 / LED', high: 'H7', fog: 'H11', parentGroup: 'Zhejiang Geely Holding Group', category: 'Luxury & Ultra-Luxury' },

  // LOTUS (Geely Holding)
  { make: 'Lotus', model: 'Evora / Emira (2010-2024)', low: 'H7', high: 'H7', fog: 'H11', parentGroup: 'Zhejiang Geely Holding Group', category: 'Luxury & Ultra-Luxury' },
  { make: 'Lotus', model: 'Elise / Exige (2000-2015)', low: 'H7', high: 'H7', fog: 'H3 / H11', parentGroup: 'Zhejiang Geely Holding Group', category: 'Luxury & Ultra-Luxury' },

  // =========================================================================
  // 14. TATA MOTORS (Jaguar, Land Rover)
  // =========================================================================
  { make: 'Jaguar', model: 'XF (2009-2020)', low: 'H7', high: 'H7', fog: 'H11', parentGroup: 'Tata Motors', category: 'Luxury & Ultra-Luxury' },
  { make: 'Jaguar', model: 'XJ / XJ8 (2004-2019)', low: 'H7 / D1S', high: 'H7', fog: 'H11', parentGroup: 'Tata Motors', category: 'Luxury & Ultra-Luxury' },
  { make: 'Jaguar', model: 'F-Type (2014-2022)', low: 'H7 / D3S', high: 'H7', fog: 'H11', parentGroup: 'Tata Motors', category: 'Luxury & Ultra-Luxury' },
  { make: 'Jaguar', model: 'X-Type / S-Type (2000-2009)', low: 'H7', high: 'H7', fog: 'H11 / H3', parentGroup: 'Tata Motors', category: 'Luxury & Ultra-Luxury' },

  // LAND ROVER (Tata Motors)
  { make: 'Land Rover', model: 'Range Rover (2003-2021)', low: 'H7 / D2S', high: 'H7', fog: 'H11', parentGroup: 'Tata Motors', category: 'Luxury & Ultra-Luxury' },
  { make: 'Land Rover', model: 'Range Rover Sport (2006-2020)', low: 'H7', high: 'H7', fog: 'H11', parentGroup: 'Tata Motors', category: 'Luxury & Ultra-Luxury' },
  { make: 'Land Rover', model: 'LR3 / LR4 / Discovery (2005-2020)', low: 'H7', high: 'H7', fog: 'H11', parentGroup: 'Tata Motors', category: 'Luxury & Ultra-Luxury' },
  { make: 'Land Rover', model: 'Defender 90/110 (1990-2016)', low: 'H4', high: 'H4', fog: 'H11', parentGroup: 'Tata Motors', category: 'Luxury & Ultra-Luxury' },

  // =========================================================================
  // 15. STELLANTIS ITALIAN LUXURY (Maserati, Alfa Romeo)
  // =========================================================================
  { make: 'Maserati', model: 'Ghibli (2014-2024)', low: 'H7 / D3S', high: 'H7', fog: 'H11', parentGroup: 'Stellantis', category: 'Luxury & Ultra-Luxury' },
  { make: 'Maserati', model: 'Levante SUV (2017-2024)', low: 'H7 / LED', high: 'H7', fog: 'H11', parentGroup: 'Stellantis', category: 'Luxury & Ultra-Luxury' },
  { make: 'Maserati', model: 'GranTurismo (2008-2020)', low: 'H7 / D1S', high: 'H7', fog: 'H11', parentGroup: 'Stellantis', category: 'Luxury & Ultra-Luxury' },

  // ALFA ROMEO (Stellantis)
  { make: 'Alfa Romeo', model: 'Giulia (2017-2024)', low: 'H7 / D3S', high: 'H7', fog: 'H11', parentGroup: 'Stellantis', category: 'Luxury & Ultra-Luxury' },
  { make: 'Alfa Romeo', model: 'Stelvio (2018-2024)', low: 'H7 / D3S', high: 'H7', fog: 'H11', parentGroup: 'Stellantis', category: 'Luxury & Ultra-Luxury' },
  { make: 'Alfa Romeo', model: '4C Coupe / Spider (2014-2020)', low: 'H7', high: 'H7', fog: 'H11', parentGroup: 'Stellantis', category: 'Luxury & Ultra-Luxury' },

  // =========================================================================
  // 16. ASTON MARTIN (Independent / Public)
  // =========================================================================
  { make: 'Aston Martin', model: 'DB9 / Vantage V8/V12 (2004-2018)', low: 'H7 / D1S', high: 'H7', fog: 'H11', parentGroup: 'Aston Martin Lagonda', category: 'Luxury & Ultra-Luxury' },
  { make: 'Aston Martin', model: 'DBS / Rapide (2008-2020)', low: 'H7', high: 'H7', fog: 'H11', parentGroup: 'Aston Martin Lagonda', category: 'Luxury & Ultra-Luxury' },

  // =========================================================================
  // 17. ELECTRIC-FIRST & SPECIALTY BRANDS
  // =========================================================================
  // TESLA (Independent / Public)
  { make: 'Tesla', model: 'Model S (2012-2020 Retrofit/Aux)', low: 'D3S / H11', high: '9005', fog: 'H11', parentGroup: 'Tesla Inc.', category: 'Electric & Specialty' },
  { make: 'Tesla', model: 'Model 3 (2017-2024 Fog & DRL Spec)', low: 'LED / H11 Aux', high: 'LED', fog: 'H11', parentGroup: 'Tesla Inc.', category: 'Electric & Specialty' },
  { make: 'Tesla', model: 'Model X (2015-2022 Aux Fog)', low: 'H11 / LED', high: '9005', fog: 'H11', parentGroup: 'Tesla Inc.', category: 'Electric & Specialty' },
  { make: 'Tesla', model: 'Model Y (2020-2024 Aux Fog)', low: 'H11 / LED', high: 'LED', fog: 'H11', parentGroup: 'Tesla Inc.', category: 'Electric & Specialty' },
  { make: 'Tesla', model: 'Roadster (2008-2012)', low: 'H7', high: 'H7', fog: 'H11', parentGroup: 'Tesla Inc.', category: 'Electric & Specialty' },

  // RIVIAN (Independent)
  { make: 'Rivian', model: 'R1T Electric Truck (Aux Fog Spec)', low: 'H11 / LED', high: '9005', fog: 'H11', parentGroup: 'Rivian Automotive', category: 'Electric & Specialty' },
  { make: 'Rivian', model: 'R1S Electric SUV (Aux Fog Spec)', low: 'H11 / LED', high: '9005', fog: 'H11', parentGroup: 'Rivian Automotive', category: 'Electric & Specialty' },

  // LUCID MOTORS
  { make: 'Lucid', model: 'Lucid Air (Pure / Touring / Grand Touring)', low: 'H7 / H11 Aux', high: '9005', fog: 'H11', parentGroup: 'Lucid Motors', category: 'Electric & Specialty' },

  // FERRARI (Independent / Public)
  { make: 'Ferrari', model: '458 Italia / Spider (2010-2015)', low: 'H7 / D1S', high: 'H7', fog: 'H11', parentGroup: 'Ferrari N.V.', category: 'Electric & Specialty' },
  { make: 'Ferrari', model: '488 GTB / Pista (2016-2020)', low: 'H7 / LED', high: 'H7', fog: 'H11', parentGroup: 'Ferrari N.V.', category: 'Electric & Specialty' },
  { make: 'Ferrari', model: 'California / Portofino (2009-2022)', low: 'H7', high: 'H7', fog: 'H11', parentGroup: 'Ferrari N.V.', category: 'Electric & Specialty' },
  { make: 'Ferrari', model: 'F430 (2005-2009)', low: 'H7 / D2S', high: 'H7', fog: 'H1', parentGroup: 'Ferrari N.V.', category: 'Electric & Specialty' },

  // MCLAREN (Independent / Public)
  { make: 'McLaren', model: '570S / 540C (2015-2021)', low: 'H7 / LED', high: 'H7', fog: 'H11', parentGroup: 'McLaren Group', category: 'Electric & Specialty' },
  { make: 'McLaren', model: '720S / GT (2017-2024)', low: 'H7 / LED', high: 'H7', fog: 'H11', parentGroup: 'McLaren Group', category: 'Electric & Specialty' },
  { make: 'McLaren', model: 'MP4-12C / 650S (2011-2017)', low: 'H7 / D1S', high: 'H7', fog: 'H11', parentGroup: 'McLaren Group', category: 'Electric & Specialty' },

  // BYD / NIO / XPENG (Global EV Manufacturers)
  { make: 'BYD', model: 'Han / Tang / Atto 3 / Seal (2020-2024)', low: 'H7 / H11', high: '9005', fog: 'H11 / H8', parentGroup: 'Global EV Manufacturers', category: 'Electric & Specialty' },
  { make: 'NIO', model: 'ES6 / ES8 / ET7 (2019-2024)', low: 'H7 / H11', high: '9005', fog: 'H11', parentGroup: 'Global EV Manufacturers', category: 'Electric & Specialty' },
  { make: 'XPeng', model: 'P7 / G9 / P5 (2020-2024)', low: 'H7 / H11', high: '9005', fog: 'H11', parentGroup: 'Global EV Manufacturers', category: 'Electric & Specialty' }
];
