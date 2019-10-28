/*
    PROBLEM:

    Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

    Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".

*/

#include <string>

// SOLUTION
std::string bumps(std::string road){
  size_t bumpCount = 0;
  for(const char& roadPoint : road) {
    if(roadPoint == 'n') {
      bumpCount++;
    }
  }
  return bumpCount > 15 ? "Car Dead" : "Woohoo!";
}