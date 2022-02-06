import time
from selenium import webdriver
from selenium.webdriver.common.by import By
import pandas as pd
import json
from bs4 import BeautifulSoup
import requests

PATH = '/usr/local/bin/chromedriver'
driver = webdriver.Chrome(PATH)
URL = 'https://www.nkk.no/rasevelger/'

def load_all_items(driver, xPath):
    while True:
        try:
            loadMoreButton = driver.find_element(By.XPATH, xPath)
            time.sleep(1)
            loadMoreButton.click()
            time.sleep(1)
        except Exception as e:
            print(e)
            break


def main():
    # 1. Open Website
    driver.get(URL)

    # 2. Load all items with button
    buttonXpath = '//*[@id="tile-1813"]/button'
    load_all_items(driver, buttonXpath)

    # 3. Get all items (dogs)
    dogs = driver.find_elements(By.XPATH, '//*[@id="tile-1813"]/ul/li[contains(@class, "racelist-item") and not(contains(@class, "article"))]')

    # 4. Initialize an empty dict of dogs.
    dogs_data = {}

    # 5. Loop through all items (dogs)
    print(len(dogs))
    for dog in dogs:
        try:
            dog_item = {}
            breed = dog.find_element(By.XPATH, './/a/div[2]/span').text
            breed_url = dog.find_element(By.XPATH, './/a').get_attribute('href')
            dog_item['breed'] = breed
            dog_item['breed_url'] = breed_url
            if breed not in dogs_data.keys():
                dogs_data[breed] = dog_item

            # Loop through the website
            source = requests.get(breed_url).text
            soup = BeautifulSoup(source, "html.parser")
            stats = soup.find('div', class_='race-properties')
            print(dog)
        except Exception as e:
            print(e)
            print(breed)

    print('Complete data gather')

    jsonString = json.dumps(dogs_data, ensure_ascii=False, sort_keys=True)

    with open('dog_data_links.json', 'w') as f:
        f.write(jsonString)

    print('Completed data writing')
main()