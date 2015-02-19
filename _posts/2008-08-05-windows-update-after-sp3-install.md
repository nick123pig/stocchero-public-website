---
layout: post
title: Windows Update after SP3 Install
created: 2008-08-05
---
<p>I had a problem where Windows Update would fail after I installed Windows SP3. It seems there is a windows update file that gets unregistered for some reason.<br />
	<br />
	To fix this problem:<br />
	<br />
	<strong>Start<br />
	Run<br />
	regsvr32 c:\windows\system32\wups2.dll</strong><br />
	<strong>OK</strong><br />
	<br />
	All done!</p>
