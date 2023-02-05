import pandas as pd
from geopy.geocoders import Nominatim

geolocator = Nominatim(user_agent="geoapiExercises")
styles = {2: "Bungalow", 3: "Cape Cod", 5: "Colonial", 7: "Contemporary", 8: "Conventional", 21: "Ranch/Rambler"}

def get_city(latitude, longitude):
    location = geolocator.reverse(f"{latitude}, {longitude}", exactly_one=True)
    city = location.raw['address'].get('town', '') or location.raw['address'].get('city', '')
    print("Latitude: " + str(latitude) + "\tLongitutde: " + str(longitude) + "\tCity: " + city)
    return city

# Load the data from the excel file
data = pd.read_excel("style-data.xlsx")

# Convert the latitude and longitude data into city names
data["city"] = data.apply(lambda x: get_city(x["latitude"], x["longitude"]), axis=1)

# Convert the numerical representation of architecture style into words using the dictionary
data["style"] = data["architecturalstyletypeid"].map(styles)

# Write the resulting data to a new excel file
data.to_excel("data_with_city.xlsx", index=False)
