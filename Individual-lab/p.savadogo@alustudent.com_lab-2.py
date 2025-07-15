"""
Plagiarism Detection Tool
-------------------------
This script compares two essay files and detects plagiarism by analyzing word overlap.
It reads both essays, extracts unique words, finds common words, calculates the plagiarism percentage,
and allows the user to search for a specific word in both essays.

Usage:
- Ensure 'essay-1.txt' and 'essay-2.txt' are present in the specified directory.
- Run the script. It will display common words, plagiarism percentage, and prompt for a word search.

Author: [Pegdwende Jael Savadogo]
Date: July 2025
"""


import re #For regular expressions to extract words
import os #For file existence checks

#get the directory where the script is located
script_dir = os.path.dirname(os.path.abspath(__file__))

# File paths for the essays
essay1_path = os.path.join(script_dir, "essay1.txt")
essay2_path = os.path.join(script_dir, "essay2.txt")

def read_file(essay): 
    """
    reads  an essay and returns a set of unique words (case-insensitive).
    If the file does not exist it prints an error and returns an empty set.
    """
    if not os.path.exists(essay): 
        print(f"Error: {essay} not found.")
        return [] # returning an empty set if the file is missing
    
    with open(essay, 'r', encoding='utf-8') as file:
        text = file.read().lower()
        
        text = re.sub(r'[^\w\s]', '', text) #using regex to extract words
        words = text.split()
        return words #using a set to remove duplicates


# --- Execution ---

# reads both essays and extract unique words
essay1_words = read_file(essay1_path)
essay2_words = read_file(essay2_path)

#Check if both files were read succesfully
if not essay1_words or not essay2_words:
    print("Error: One or both files could not be read. Please check the file paths.")
    exit()

#sets used for unique words
set1 = set(essay1_words)
set2 = set(essay2_words)
common_words = set1 & set2
#dictionaries used for word count
freq_dict1 = {}
freq_dict2 = {}
#count word frequencie
for word in essay1_words:
    freq_dict1[word] = freq_dict1.get(word, 0) + 1
for word in essay1_words:
    freq_dict2[word] = freq_dict2.get(word, 0) + 1

#calculates plagiarism percentage
total_unique_words = len(set1 | set2)
plagiarism_percentage = (len(common_words)/ total_unique_words) * 100 if total_unique_words else 0

#display result
print(f"\nWords in common ({len(common_words)}): {sorted(common_words)}")
print(f"\nPlagiarism Percentage: {plagiarism_percentage:.2f}%")


#checking if the plagiarism percentage is greater that 50%, if more than or equql to 50% of the words are identical
# in both texts the essay is considered as plagiarized
if plagiarism_percentage >= 50:
    print("This essay is plagiarized!")
else:
    print("Essay is mostly original :)")

# prompts the user to search for a specific word 
word_to_search = input("\nEnter a word you are searching for: ").lower()
found_in_essay1 = freq_dict1.get(word_to_search, 0)
found_in_essay2 = freq_dict2.get(word_to_search, 0)

if found_in_essay1 or found_in_essay2:
    print(f"Word '{word_to_search}' was found {found_in_essay1} time(s) in essay 1 and {found_in_essay2} time(s) in essay 2.")
else:
    print(f"Word '{word_to_search}' was not found in either essay.")

# THE END 