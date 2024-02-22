export const users = [
    {
        "id": "478168b1-5fcd-4af4-9d93-9d520060bfa0",
        "username": "lakers23",
        "name": "LeBron James",
        "card": "Discover Student",
        "balance": 100
    },
    {
        "id": "b793db37-58ac-4b5a-bf5e-cc6e7fe0b759",
        "username": "checkdown_merchant",
        "name": "Brock Purdy",
        "card": "Capital One Savor One", 
        "balance": 50
      },
      {
        "id": "12a97542-c8e5-4db8-abfc-92ccb3faa443",
        "username": "dulapeep100",
        "name": "Dua Lipa",
        "card": "American Express Centurion Black Card",
        "balance": 200
      }
    ]

export const orders = [
    {
        "id": "4f665cf0-0d26-4b67-a6fa-9708508515ed",
        "name": "Cheese Pizza",
        "restaurant": "Bronx Pizza",
        "quantity": 2,
        "cost": 15,
        "owner": "lakers23",
        "status": "Pending",
        "driver": null
      },
      {
        "id": "69077aea-c3f0-4a4a-a8f0-316c2b2f14a6",
        "name": "Chicken Teriyaki",
        "restaurant": "Suki Hana",
        "quantity": 1,
        "instructions": "Add a stamp to my stamp card!",
        "cost": 25,
        "owner": "checkdown_merchant",
        "status": "Completed",
        "driver": "chani_on_arrakis"
      },
      {
        "id": "d00b154a-5630-484b-880e-a4a49e931550",
        "name": "Carnitas Burrito",
        "restaurant": "Chipotle",
        "quantity": 1,
        "instructions": "Queso on the side. Leave on porch.",
        "cost": 12.30,
        "owner": "dulapeep100",
        "status": "Pending",
        "driver": "redbull4lyfe"
      },
      {
        "id": "5a6e1415-4ec7-4f14-8283-78b9bc8b2175",
        "name": "Rice Bowl",
        "restaurant": "Micheline's Pita House",
        "quantity": 1,
        "instructions": "Extra tahini sauce.",
        "cost": 15.99,
        "owner": "dulapeep100",
        "status": "Pending",
        "driver": "chani_on_arrakis"
      },
      {
        "id": "055ebd5d-f3e7-407f-b41e-568fef5a9a2b",
        "name": "French Style Beef Steak",
        "restaurant": "The Noble Chef",
        "quantity": 1,
        "instructions": "",
        "cost": 100,
        "owner": "checkdown_merchant",
        "status": "Pending",
        "driver": "redbull4lyfe"
      }
]

export const drivers = [
    {
        "id": "01ca27dd-4522-4900-bc3e-f4fb39cb3528",
        "username": "redbull4lyfe",
        "name": "Max Verstappen",
        "car": "RB19",
        "status": "Available"
      },
      {
        "id": "c567209d-6de8-4e36-9289-4f6790d101a5",
        "username": "chani_on_arrakis",
        "name": "Zendaya",
        "car": "Ornithopter",
        "status": "Available"
      }
]
