/*

    PROBLEM:
    The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

    Examples
    "din"      =>  "((("
    "recede"   =>  "()()()"
    "Success"  =>  ")())())"
    "(( @"     =>  "))((" 
    Notes

    Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

*/

#include <string>

// TODO: Actually Optimize this
std::string duplicate_encoder(const std::string& word){
  // force entire string to be lowercase to force
  std::string wordLower;
  for(const char& currentChar : word) {
    wordLower += std::tolower(currentChar);
  }
  // create something to store the return string with
  std::string returnString = "";
  for(const char& currentChar : wordLower) {
    // if the string count > 1, add a ')'. Otherwise, add a '('.
    returnString += (std::count(wordLower.begin(), wordLower.end(), currentChar) > 1)?(')'):('(');
  }
  // return
  return returnString;
}