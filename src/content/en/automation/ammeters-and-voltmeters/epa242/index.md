---
desc:
  - 4 digits display
  - Easy to use with front panel keypad
  - 5A/60 mV, CT20/30 current transformer/60mV or 1A input
  - Programmable scale between 5A and 9999A
  - Multifunctional alarm output for upper and lower limits (order option)
  - Communication feature via isolated RS485, using ModBus RTU protocol (order option)
  - Measuring type can be selected as AC, DC or true RMS
  - 0/4-20mA, 0-10V or 1-5V output selection (Only “A” type output devices)
  - Key lock feature
  - CT20/30 current transformer (**order separately**)
  - CE marked according to European Norms
short: 77x35 mm, Ammeter with Optional Inputs and Outputs
spec:
  - Environmental Conditions
  - Ambient/Storage Temperature: 0 ...50 ºC / -25...70 ºC
  - Relative Humidity: 80% Relative humidity for temperatures up to 31 °C, decreasing linearly to 50% at 40 °C
  - Protection Degree: "According to EN 60529 IP20"
  - Height: Max. 2000m
  - Electrical Characteristics
  - Supply: 90-250V AC 50/60Hz or 10-30V DC / 8-24V AC 50/60Hz
  - Power consumption: 7VA
  - External Connections: Screw-terminals
  - Scale: |
      AC and RMS: 
              Input type 5A/60mV: 0...9999A (specified by c.tr.r parameter)
              For example: If c.tr.r=5, scale is 0...5A
              Input type CT20/30 or 60mV: 
              If itYP=Ct20, input range is 0...300A (specified by turn parameter)
              For example: If turn=1, scale is 0...300A
              itYP=Ct30, input range is 0...120A (specified by tUrn parameter)
              For example: If turn=1, scale is 0...120A
              Input type 1A: 0...9999A (specified by c.tr.r parameter)
              For example: If c.tr.r=1, scale is 0...1A		
      DC: 
              Input type 5A/60mV: -999...9999A (specified by c.t.r.r parameter)
              For example: If c.tr.r=5, scale is -5...5A
              Input type CT20/30/60mV : 
              DC Measurement can not be performed by using current transformer
              If itYP=SHnt, input range is -999..9999A (specified by c.tr.r parameter)
              For example: If c.tr.r=5, scale is -5...5A
              Input type 1A : -999...9999A (specified by c.t.r.r parameter)
              For example: c.tr.r=1 için scale -1...1A
  - Sensitivity: 0.002A x c.t.r.r (for example, 0.01A for c.t.r.r=5)
  - Accuracy: |
      AC: ±1%(of full scale) (±2% for square wave form)
      DC: ±1% (of full scale)
      RMS: ±1% (of full scale) (±2% for square wave form)
  - Input Range: |
      Input type 60mV: -60mV...60mV (device may be damaged at 50V and above voltages)
      Input type 1A: -1A...1A (device may be damaged at 2A and above currents)
      Input type 5A: -5A...5A (device may be damaged at 10A and above currents)
      Input type CT20/30 : 0...150mA
  - Input Impedance: |
      Input type 60mV: 20kohm
      Input type 1A: 90mohm
      Input type 5A: 12mohm
      Input type CT20/30: 600mohm
  - Frequency Range: "DC, 20Hz - 70Hz"
  - Outputs
  - Alarm Output: "Relay: 250V AC, 8A (for resistive load), NO+NC"
  - Analog Output: 0-20mA DC, 4-20mA DC, 0-10V DC or 1-5V DC selection (load resistance for current outputs are max. 500ohm)
  - Life Expectancy: Mechanical 30.000.000 operations (under no load), Electrical 100.000 operations (8A at 250V AC, resistive load)
  - Housing
  - Mounting Method: Panel mounting
  - Dimensions: W77xH35xD61 mm
  - Weight: Approx. 250g (after packaging)
  - Enclosure Material: Self extinguishing plastics
title: "EPA242"
weight: 0
manuals:
  - title: Manual
    url: epa242.pdf
downloads:
  - title: ENDA Modbus Studio
    url: /automation/downloads/endamodbusstudio.zip
---
