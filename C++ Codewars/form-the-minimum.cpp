/*
*/

// SOLUTION
#include <vector>
#include <algorithm>
#include <cmath>

using namespace std;

bool sortByGreatest(int number1, int number2) { return number1 > number2; }

unsigned long long minValue (vector <int> values) {
  // Your code is here .. enjoy !!!
  vector<int> usedNumbers;
  for(const int& number : values) {
    if(find(usedNumbers.begin(), usedNumbers.end(), number) == usedNumbers.end()) {
      usedNumbers.push_back(number);
    }
  }
  sort(usedNumbers.begin(), usedNumbers.end(), sortByGreatest);
  unsigned long long result = 0;
  for(size_t i = 0; i<usedNumbers.size(); i++) {
    result += usedNumbers[i] * pow(10, i);
  }
  
  return result; 
}