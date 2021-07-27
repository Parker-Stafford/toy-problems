""" Given a characters array tasks, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle.

However, there is a non-negative integer n that represents the cooldown period between two same tasks (the same letter in the array), that is that there must be at least n units of time between any two same tasks.

Return the least number of units of times that the CPU will take to finish all the given tasks.



Example 1:

Input: tasks = ["A","A","A","B","B","B"], n = 2
Output: 8
Explanation:
A -> B -> idle -> A -> B -> idle -> A -> B
There is at least 2 units of time between any two same tasks.
Example 2:

Input: tasks = ["A","A","A","B","B","B"], n = 0
Output: 6
Explanation: On this case any permutation of size 6 would work since n = 0.
["A","A","A","B","B","B"]
["A","B","A","B","A","B"]
["B","B","B","A","A","A"]
...
And so on.
Example 3:

Input: tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2
Output: 16
Explanation:
One possible solution is
A -> B -> C -> A -> D -> E -> A -> F -> G -> A -> idle -> idle -> A -> idle -> idle -> A


Constraints:

1 <= task.length <= 104
tasks[i] is upper-case English letter.
The integer n is in the range [0, 100]. """

from typing import List
import heapq
import collections


class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
      if not n: return len(tasks)
      computations = 0
      # iterate through and get the count of each task
      priority = {}
      for task in tasks:
        if priority.get(task):
          priority[task] -= 1
        else:
          priority[task] = -1
      # make a max heap from the counts
      counts = priority.values()
      counts = list(counts)
      heapq.heapify(counts)
      # make waiting queue
      wait = []
      # while heap or waiting queue
      while len(counts) or len(wait):
        # increment computations
        # pop waiting queue
        if len(wait):
          # if it's not 0
          prio = wait.pop(0)
          if (prio):
            # subtract 1 and add back to heap
            heapq.heappush(counts, prio)
          elif not len(counts):
            computations += 1
            continue
        # pop heap
        computations += 1
        prio = heapq.heappop(counts)
        # if that value is greater than 1
        if prio < -1:
          # subtract 1
          prio += 1
          # push it to our waiting queue array
          if len(wait) >= n:
            # if waiting queue length is greater than n Push
            wait.append(prio)
            # if not put it in place to wait for cooldown
          else:
            for i in range(n - len(wait)):
              wait.append(0)
            wait.append(prio)
      return computations

# cool math solution
# Answer is either max frequency - 1 * n + 1 + max freq count or the length of the tasks list
# this is because we need to do enough tasks to get all of the max frequency tasks done with n spaces in the middle
# regardless of how many other tasks there are
# in the final cycle of tasks we just do all of the max freq tasks that's why we add the count to the end
# in the event that there are more tasks total than is necessary for this, we need to complete all tasks but the cool down on the last task is not the rate limiting factor so we take len(tasks)

class Solution:
  def leastInterval(self, tasks: List[str], n: int) -> int:
    freqs = collections.Counter(tasks)
    freqs = list(freqs.values())
    max_freq = max(freqs)
    max_freq_count = 0
    i = 0
    # find number of max freqs
    while(i < len(freqs)):
      if freqs[i] == max_freq:
        max_freq_count += 1
      i += 1
    return max((max_freq - 1) * (n + 1) + max_freq_count, len(tasks))


# heap solution similar to mine above
# in this solution instead of pushing things to a waiting queue, we just grab everything off the heap for one cycle 
# incrementing our computations each time
# once we've done that we subtract from the frequency and add them back to the heap
class Solution:
  def leastInterval(self, tasks: List[str], n: int) -> int:
    freqs = collections.Counter(tasks)
    freqs = list(freqs.values())
    heap = []
    for freq in freqs:
      heap.append(-freq)
    computations = 0
    cycle = n + 1
    heapq.heapify(heap)
    while heap:
      finished = []
      tasks_completed = 0
      for i in range(cycle):
        if heap:
          tasks_completed += 1
          finished.append(heapq.heappop(heap) + 1)
      for freq in finished:
        if freq < 0: heapq.heappush(heap, freq)
      # we do this because on the last cycle (when heap has nothing pushed to it) we only need to count the tasks completed not the full cycle with downtime
      computations += cycle if heap else tasks_completed
    return computations
