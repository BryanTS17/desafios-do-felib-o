import random as rd

nomeHeroi = input("fale o nome do seu Heroi: ")
nivelHeroi = rd.randint(0, 12000)

def clasificacao(nivelHeroi):

  if nivelHeroi < 1000:
    classe = "Ferro"

  elif nivelHeroi <= 2000:
    classe = 'Bronze'

  elif nivelHeroi <= 5000:
    classe = 'Prata'

  elif nivelHeroi <= 7000:
    classe = 'Ouro'

  elif nivelHeroi <= 8000:
    classe = 'Platina'     

  elif nivelHeroi <= 9000:
    classe = 'Bronze'

  elif nivelHeroi <= 10000:
    classe = 'Ascendente'  

  elif nivelHeroi >= 10001:
    classe = 'Radiante'  

  return classe   
  
#Se XP for menor do que 1.000 = Ferro
#Se XP for entre 1.001 e 2.000 = Bronze
#Se XP for entre 2.001 e 5.000 = Prata
#Se XP for entre 5.001 e 7.000 = Ouro
#Se XP for entre 7.001 e 8.000 = Platina
#Se XP for entre 8.001 e 9.000 = Ascendente
#Se XP for entre 9.001 e 10.000= Imortal
#Se XP for maior ou igual a 10.001 = Radiante

print(f"seu Heroi está no nível {clasificacao(nivelHeroi)}")