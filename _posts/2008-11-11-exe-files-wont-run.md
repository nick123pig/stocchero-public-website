---
layout: post
title: EXE files won't run
created: 2008-11-11
---
<p>I came across the one of the strangest problems I&#39;ve ever encountered last night.<br />
	<br />
	On a Windows XP machine, all of the file assocations were lost. I couldn&#39;t run any exe files. That included regedit, cmd, and pretty much everything else. All of the desktop icons lost their icon pictures. I looked in the folder options, and all of the file associations were gone. Same symptoms in safe mode. I thought the machine was hosed, no way to fix it.<br />
	<br />
	However, there is a fix:<br />
	<br />
	1) Open task manager by simultaneously pressing Ctrl + Shift + Esc<br />
	2) Change to the Applications tabs<br />
	3) Hold Ctrl while you click on &quot;New Task&quot;<br />
	4) A command prompt will appear. Hooray!<br />
	5) In the command prompt, type the following.<br />
	<span style="font-family: courier new;">ASSOC .EXE=exefile</span><br />
	6) Again, in the command prompt, type the following.<br />
	<span style="font-family: courier new;">ASSOC .REG=regfile</span><br />
	7) Reboot the computer<br />
	8) Now you should have access to exe files. Open up a browser, and download <a href="http://www.kellys-korner-xp.com/regs_edits/exefix.reg">ExeFix</a><br />
	9) Reboot again. You might have to redo some misssing file extensions, but it&#39;s better than reinstalling XP.</p>
