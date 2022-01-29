# flow info 

<!-- template: gist.github.com/ImminentFate/931bd780de7fb2aecc376e7af446c5df -->
<table><tbody><tr><td><sub><b>
1. read coordinate file generated from chrome extension
    
</td></tr></tbody></table>
<table><tbody><tr><td><sub><b>
2. <code>/tpll</code> to each cootdinate
   
</td></tr></tbody></table>
    

<table><tbody><tr><td><sub><b>
3. <code>/up 0</code> creating glass block each tpll

</td></tr></tbody></table>

---

# config
- edit the ```TPLL_HEIGHT``` number config at [this line](https://github.com/ASEAN-Build-The-Earth/bte-asean-rpa/blob/d6ecd4e7b33fe4e18bdab4c1ccd42a6ae08d6b14/power_automate/flow.basic/copy-me.yaml#L3) to change what Y level the bot will tpll to
    - as well as `ActionDelay` and `OnReady`, increase it if you are having high ping in the server the bot will delay every action longer
