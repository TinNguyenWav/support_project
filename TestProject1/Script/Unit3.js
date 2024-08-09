function resultChecker()
{
var path = "D:\\PDF_Testing.pdf";
var contents = PDF.ConvertToText(path)
var vars = "Your energy bill";

contents = aqString.Replace(contents, "\n", " ")

result = aqString.Find(contents, vars)

if(result == -1){
Log.Error(vars + " is not within the string")
Log.Message(contents)
}}



function GetPDFText()
{

  var path = "C:\\Users\\tu.ha\\Downloads\\ABCD.pdf";

  // Extract and recognize the PDF file text content
  var str = PDF.ConvertToText(path);
  if (aqFile.Exists(path))
    Log.Message("View the recognized text in the Details panel of the log", str);
}