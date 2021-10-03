import os
path = '/Users/haakonjacobsen/projects/bark/frontend/assets/svg/dogs'

def rename_files():
    files = [file for file in os.listdir(path) if file.endswith('.svg')]
    for index, file in enumerate(files):
        index_start = 0
        index_end = len(file)-1
        for i in range(1, len(file)):
            # Find start
            if (file[i-1] == '1' and file[i] == '='):
                index_start = i+1
            # Find ending
            elif (file[i] == '.' or file[i] == ','):
                index_end = i
                break
        new_name = '-'.join(file[index_start:index_end].split(' ')).lower()
        if file != new_name:
            os.rename(file, (new_name+'.svg'))

rename_files()