num = 42
n = 40

  gen1 = num + (num*0.5).floor
  gen2 = gen1 + (gen1*0.5).floor
  gen3 = gen2 + (gen2*0.5).floor
  gen4 = gen3 + (gen3*0.5).floor
  gen5 = gen4 + (gen4*0.5).floor
  gen6 = gen5 + (gen5*0.5).floor
  gen7 = gen6 + (gen6*0.5).floor
  gen8 = gen7 + (gen7*0.5).floor
  gen9 = gen8 + (gen8*0.5).floor
  gen10 = gen9 + (gen9*0.5).floor
  gen11 = gen10 + (gen10*0.5).floor
  gen12 = gen11 + (gen11*0.5).floor
  gen13 = gen12 + (gen12*0.5).floor
  gen14 = gen13 + (gen13*0.5).floor
  gen15= gen14 + (gen14*0.5).floor
  gen16 = gen15 + (gen15*0.5).floor
  gen17 = gen16 + (gen16*0.5).floor
  gen18 = gen17 + (gen17*0.5).floor
  gen19 = gen18 + (gen18*0.5).floor
  gen20 = gen19 + (gen19*0.5).floor
  gen21 = gen20 + (gen20*0.5).floor
  gen22 = gen21 + (gen21*0.5).floor
  gen23 = gen22 + (gen22*0.5).floor
  gen24 = gen23 + (gen23*0.5).floor
  gen25 = gen24 + (gen24*0.5).floor
  gen26 = gen25 + (gen25*0.5).floor
  gen27 = gen26 + (gen26*0.5).floor
  gen28 = gen27 + (gen27*0.5).floor
  gen29 = gen28 + (gen28*0.5).floor
  gen30 = gen29 + (gen29*0.5).floor
  gen31 = gen30 + (gen30*0.5).floor
  gen32 = gen31 + (gen31*0.5).floor
  gen33 = gen32 + (gen32*0.5).floor
  gen34 = gen33 + (gen33*0.5).floor
  gen35 = gen34 + (gen34*0.5).floor
  gen36 = gen35 + (gen35*0.5).floor
  gen37 = gen36 + (gen36*0.5).floor
  gen38 = gen37 + (gen37*0.5).floor
  gen39 = gen38 + (gen38*0.5).floor
  seikai = gen39 + (gen39*0.5).floor
  puts seikai
  
  
  for n in 1..512 do
  wari = 77777 / n
  amari = 77777 % n
  seikai = wari + amari
  puts seikai
  end
  
a = gets.to_i
b = gets.to_i
nokori = 500-a-b

puts nokori