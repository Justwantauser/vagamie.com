import re

txt = input("name").strip()
redflag = re.search("^[a-z0-9]{5}$", txt)
if redflag:
    print("valid")
    confirm = input(f'#{txt} will be your tag, confirm?').strip()
    if confirm == 'yes' or confirm == "Yes":
        print(f"Okay, your tag is now set to #{txt} ")
    else:
        print("then choose another one bozo")
    
else:
    print("Only letters and numbers are allowed, only 5")