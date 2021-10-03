import os
path = '/Users/haakonjacobsen/projects/bark/frontend/assets/svg/dogs'

def create_txt():
    files = [file[:-4] for file in os.listdir(path) if file.endswith('.svg')]
    with open('dognames.txt', 'w') as f:
        for item in files:
            f.write("%s\n" % item)

create_txt()