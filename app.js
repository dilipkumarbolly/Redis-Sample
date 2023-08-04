//set name
//get name
//clear
//flushall
//ttl name--> time to leave
//expire name 10 - set  aleardy present name to expire after 10sec
//setex name 10 Dilip_Kumar -set name to expire after 10seconds

//arrays !!!

//lpush friends ramesh -push to left of array
//rpush friends suresh - psuh to right of array
//lrange friends 0 -1 - iterate the array start and end index
//lpop friends ---removes the last element from original array and returns
//rpop friends ---removes the first element from original array and returns
//lpush friends ---pushes ele to array's left and returns
//rpush friends ---pushes ele to array's right and returns

//sets !!! (uniqe values only)

//sadd hobbies "cricket" -- add to set
//sadd hobbies music -- add to set
//srem hobbies music -- remove from set
//srem hobbies "music"  -- remove from set

//hset person name krish -- add name
//hget person name ---get name
//hgetall person --> "name" "krish"
//hdel person --> deletes key & value
//hexists person name --->check whether it exists or not
