import re
import os

essay1 = 'essay-1.txt'
essay2 = 'essay-2.txt'

def read_file(essay): #reads  an essay and returns a set of words
    if not os.path.exists(essay): 
        print(f"Error: {essay} not found.")
        return set() # returning an empty set if the file is missing
    
    with open(essay1, 'r', encoding='utf-8') as file:
        text = file.read().lower()
        words = re.findall(r'\b\w+\b', text) #using regex to extract words
        return set(words) #using a set to remove duplicates

def find_common_words(set1, set2): # a function for finding common words between the two sets
    return set1 & set2

def search_word(word, set1, set2): # a function that checks if a word is in at least on text.
    return word.lower() in set1 or word.lower() in set2

def calculate_plagiarism(set1, set2): #  a function that calculates the plagiarism percentage.
    common_words = find_common_words(set1, set2)
    all_words = set1 | set2 
    if len(all_words) == 0:
        return 0
    plagiarism_percentage = (len(common_words) / len(all_words)) * 100
    return plagiarism_percentage

# reads both essays
essay1_words = read_file(essay1)
essay2_words = read_file(essay2)

if not essay1_words or not essay2_words:
    print("Error: One or both files could not be read. Please check the file paths.")
    exit()

# finds common words btween the two texts
common = find_common_words(essay1_words, essay2_words)
print(f"common words ({len(common)}):", common)

# searches for a specific word
word_to_search = input("Enter a word you are searching for: ")
found = search_word(word_to_search, essay1_words, essay2_words)
print(f"Word found: {found}")

# calculates plagiarism percentage
plagiarism = calculate_plagiarism(essay1_words, essay2_words)
print(f"Plagiarism Percentage: {plagiarism:.2f}%")

#checking if the plagiarism percentage is greater that 50%, if more than or equql to 50% of the words are identical
# in both texts the essay is considered as plagiarized
if plagiarism >= 50:
    print("This essay is plagiarized!")
else:
    print("Essay is mostly original :)")