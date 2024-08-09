function Test1()
{
  TestedApps.taskmgr.Run(1, true);
  let taskmgr = Aliases.Taskmgr;
  let form = taskmgr.formTaskManager;
  form.panelTaskmanagermain.panel.ClickR(130, 243);
  taskmgr.popupContext.menuitemEndTask.Click();
  form.titlebar.buttonClose.ClickButton();
  TestedApps.notepad.Run(1, true);
}