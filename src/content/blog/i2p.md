---
title: 'Running an I2P Router'
description: 'Post 1'
pubDate: 'Oct 3, 2026'
image: ../../assets/images/i2p.svg
---

So, I finally set up an i2p router, after thinking about it for 4 years. At least I'm thoughtful. 
For those less thoughtful than me, you can follow this tutorial to set up your i2p router right away.

If you want some context, then you can look up i2p and read about it. That's right, you get some homework.
Here are some links for the lazy (definitely not malware or rick rolls).

- [malware 0](https://i2p.net/zh/)
- [malware 1](https://i2p.net/en/)
- [malware 2](https://en.wikipedia.org/wiki/I2P)
- [rick roll 0](https://en.wikipedia.org/wiki/Mix_network)
- [rick roll 1](https://en.wikipedia.org/wiki/David_Chaum)

But, it honestly isn't that important to know what you are downloading on your computer. So, just 
follow the next steps if you don't want to do the homework.

First, I'll say some important stuff though about the setup. This is just meant to be a router
so that you can access i2p from all devices on your LAN through your debian based home server. This means
that you kinda have to have a debian based home server (with a static ip) to do what I did.

If you don't have this, I'd recommend just setting up i2p in some other way. But, maybe this works.

Anyway, setting up an i2p router is pretty easy, and you can definitely get it done in like 30 minutes.
I just followed some instructions from the i2pd site, reddit, and chat. 

1. Install i2pd[^1].
```bash
$ sudo apt update
$ sudo apt-get install apt-transport-https
$ wget -q -O - https://repo.i2pd.xyz/.help/add_repo | sudo bash -s -
$ sudo apt-get update
$ sudo apt-get install i2pd
```

Instructions 2-4 come from this reddit thread [^2]

2. Run i2pd
```bash
$ sudo systemctl enable i2pd.service
```

3. **Optional**: disable swap

Disable swap if you are running off of some form of memory that wears out quickly (SD card/Flash drive). I am running on an SD card so I did this.
```bash
$ sudo systemctl disable dphys-swapfile.service
```

4. Install ufw, and set it up to allow traffic on 7070. 

ufw (uncomplicated firewall) is a firewall, and we are allowing traffic to 7070 so that we can see the i2p webconsole via devices on our lan.  
```bash
$ sudo apt install ufw
[restart the Pi]
$ sudo ufw allow 7070/tcp

```
Instructions 5 and 6 mostly come from the getting started with i2p beginners guide [^3]

5. **Optional**: Set up port forwarding 

Apparently it is optional to port foward, which I don't 100% understand. But it is. I did it anyway because those who know said I would get better performance and stuff.
- run `sudo ss -lntup | grep i2pd` to see which port you have to forward
	- the port should be not one of the localhost ones and not 4444, 4447,or 7070
- forward the port via whatever mechanism your router provides (I had to use the xfinity app)
- Allow udp + tcp traffic on this port via ufw

6. Set up a browser profile for i2p

This guide is for Firefox. If you don't use firefox, you'll have to figure it out yourself, but it will likely be the same.
- The website reccommends setting up a seperate browser profile for i2p so do that
- Navigate to -> Settings -> Privacy and Security -> Connection and software security (advanced settings) 	
	- set "HTTPS-Only Mode" to "Don’t enable HTTPS-Only Mode"
	- open "Configure Proxy" let HTTP Proxy = "static ip of server" and Port = "4444"
	- press ok
- Then type about:config into the search bar
	- look up keyword.enabled and set it to false (should be the button on the right to toggle)
	- look up media.peerconnection.ice.proxy\_only and set to true




[^1]:[i2pd install guide](https://docs.i2pd.website/en/latest/user-guide/install/)
[^2]:[raspberry pi i2p reddit thread](www.reddit.com/r/i2p/comments/zp9p94/setting_up_an_i2p_router_on_a_raspberry_pi/)
[^3]:[getting started with i2p](https://i2p.net/en/docs/guides/gettingstarted/)
