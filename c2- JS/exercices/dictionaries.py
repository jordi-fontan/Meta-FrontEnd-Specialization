name = input("Enter file:")
if len(name) < 1:
    name = "mbox-short.txt"
handle = open(name)

hours_dic=dict()
i=0
for line in handle:
    if not line.startswith('Date:'):
      continue
   
    #we want field 6
    time=line.split()[5]
  
    i+=1
    if i%2==0:
      continue    
    hour=time.split(':')[0]
    
    
    if hour not in hours_dic:
        hours_dic[hour]=1
    else:
        hours_dic[hour]=hours_dic[hour]+1
#print(hours_dic)  
for key in sorted(hours_dic):
    print(key, hours_dic[key])
    
    
