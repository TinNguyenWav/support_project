function Test1()
{
  Browsers.Item(btChrome).Navigate("https://bearstore-testsite.smartbear.com/");
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  browser.pageShop.sectionContent2.articleArt.linkShowProductsInCategoryFurnit.imageFurnitureJpgSize256.Click();
  let page = browser.pageShopFurniture;
  page.Wait();
  page.sectionContent2.articleArt.linkShowProductsInCategoryChairs.imageFurnitureJpgSize256.Click();
  page = browser.pageShopChairs;
  page.Wait();
  let textNode = page.sectionContent;
  aqObject.CheckProperty(textNode.textnodeChairs, "contentText", cmpEqual, "Chairs");
  textNode.linkShowDetailsForBallChair.imageBallChairWhiteJpgSize256.Click();
  aqObject.CheckProperty(browser.pageShopBallChair.sectionContent.articlePdPageBody.asideCol12ColMd6ColLg5PdInfoColZ.textnodeBallChair, "contentText", cmpEqual, "Ball Chair");
}