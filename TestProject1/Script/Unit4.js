function Main()
{

  // Sets the beginning of the "Create an order" test
  aqTestCase.Begin("Create a test");
  try{

    Log.Message("Log 1 TC1")

  }
  catch (e){
    Log.Warning("Test case \"" + aqTestCase.CurrentTestCase.Name + "\" failed");
  }

  finally{
    // Sets the end of the "Create order" test
    aqTestCase.End();
  }
  
  aqTestCase.Begin("Create a test Fail");
  try{

    Log.Error("This is an error")

  }
  catch (e){
    Log.Warning("Test case \"" + aqTestCase.CurrentTestCase.Name + "\" failed");
  }

  finally{
    // Sets the end of the "Create order" test
    aqTestCase.End();
  }
}

function Test1()
{
  Log.SaveResultsAs("C:\\Users\\tu.ha\\Documents\\Log\\JUnitReport.xml", lsJUnit)
}

