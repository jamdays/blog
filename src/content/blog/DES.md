---
title: 'DES + NSA = <3'
description: 'Post 3'
pubDate: 'Oct 18 2026'
image: ../../assets/images/DES.png 
draft: false
---

The equation above is one of my own design. If the meaning is unclear, I hope that after reading, it will be a little less unclear.

DES, if you don't know what it is, is the Data Encryption Standard. Fortunately for me, we only need a foggy sense of what DES is to really understand anything. 
Pretty much, the only important stuff here is "Encryption Standard". Since we all have a vague idea of what encryption is, we don't really need to elaborate anymore. 

Now, as far as the NSA, if you don't know what it is, then you are probably --

If you don't know what + and = are, then I'm a little worried for you. But, honestly not that worried, because since you are reading in your spare time, I'm sure you will be among the greatest business majors, and you will make a lot of money.

<3 on the other hand, is much more complex than the other 4 things. But, if you don't know <3, I hope that one day you do... Hopefully, once you see the beauty of DES + NSA, you might be able to imagine what <3 must be like. 

So, why is this equation true? Well, like most equations, it doesn't really come down to hard facts, it is just about the general vibe of being true.

Since it is really about the vibe, we should set the scene.

It is January 15th 1977[^1]. 
Some rode their horses, some walked, and some biked, but they all got the same news. 
The national bureau of standards had just published FIPS 46. 
Children wept tears of joy, adults partied, and horses became relieved. 
For they naturally all knew FIPS 46 would one day mean they may never have to walk, bike, ride, or in the horses case, be ridden, again.
Now, as people knew immediately, the amazing Microsoft Teams could eventually replace the standard work environment.

But, not everyone was so convinced, the ever bothersome academics wanted to know more, for they were skeptical. Was it really possible that FIPS 46 was so perfect?
Could a beautiful and life changing application like Microsoft Teams really be created?

So, what was FIPS 46? Why were academics skeptical? And, did they really ride horses in 1977? 

Let us zoom in a bit to answer these questions. Upon the anouncment of FIPS 46, Alice, not much of a horse rider, decided she wanted to contact Prof. Bob about the interesting news. So, she decided to message him online.


>**Alice**: "Hey Prof. Bob, did you see FIPS 46? It's awesome that we can talk secretly online now"
>
>**Bob**: "Those who know"
>
>**Alice**: "Yeah, it was very exciting to see them release the Data Encryption Standard"
>
>**Bob**: "Facts blud"
>
>**Alice**: "I'm so happy they didn't release the design process or specifications, because that would be so confusing"
>
>**Bob**: "Low-key true" 
>
>**Alice**: "It is also great that the NSA helped them design DES"
>
>**Bob**: "Wait what" 
>
>**Alice**: "The NSA is so smart, I'm sure they know more than us"
>
>**Bob**: "Ok facts"
>
>**Alice**: "It is 1977 so I ride horses"
>
>**Bob**: "Me too"

From this definitely historical conversation, we can pick up a couple of things. First, FIPS 46 was the release of DES. Second, Bob is skeptical because they didn't release release the reasoning behind many design choices. Third, the NSA was somehow involved in the design process. Fourth, they confirmed they rode horses in 1977.

So, what is going on? Who designed DES, and why did the NSA help? Well, it comes down to the story of another three letter organization, one of the most important ones in computer history, IBM.

## The History

IBM designed DES when the National Bureau of Standards solicited proposals for a public encryption standard[^2]. However, when DES was released in 1977, as you can tell from the above historical conversation, people were suspicious. And rightfully so, even now, design reasoning for many of the critical parts of DES are not well understood. This skepticism basically created the academic discipline of cryptanalysis.  
However, more than the unclear design reasoning, the NSA was involved.

The NSA suggested many changes to the algorithm, and even at IBM it seemed people might not have known why. There is evidence that the NSA might've saved us, making DES more secure, and there are suspicous details and other things that remain unclear. 

Really though, people spent years trying to reverse engineer the criteria for choosing certain parts of the system. And still, to this day, there are speculations about unknown weaknesses in certain components. The NSA also famously tried to convince IBM to reduce the key size from 64 to 48 bits, and in the end they compromised on 56. This is the difference between 1 day to brute force a key and 256 days. 

The most interesting of these details (besides S-box 5 of course) is the story of differential cryptanalysis.

Differential cryptanalysis was a technique to break DES discovered by Eli Biham and Adi Shamir in 1992. The drama is best summed up with a short remark in the preface of their textbook on differentail cryptanalysis. 

> Remark: Shortly before this book was sent to the publishers, Don Coppersmith (who was a member of the DES design team at IBM in the early 70’s) revealed that his team was aware of differential cryptanalysis back in 1974, and designed the S boxes and the permutation in order to optimally defeat it. They had to keep this information secret for 18 years for national security reasons since it was such a potent form of cryptanalysis, but decided to break the silence after we rediscovered and published it. In response to our question, Don refused to reveal whether this is the strongest attack on the DES that his team was aware of, but reiterated his belief that the DES is still viable.

Interestingly, as stated, "Don refused to reveal whether this is the strongest attack on DES that his team was aware of".

## So what?

Well, I can't make any conclusions for you. Maybe the NSA was involved to harden DES or maybe to weaken it.


[^1]: [FIPS 46](https://csrc.nist.gov/pubs/fips/46/final)
[^2]: This was actually on the second solicitation because no proposal was accepted as sufficient the first time.
