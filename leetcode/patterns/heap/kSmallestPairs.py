#    1, 7, 11
#  2 1  3  6 
#  4 2  5  8
#  6 4  7  9
#
# the numbers in the matrix represent the order in which they are added to the queue
#

import heapq
from typing import List;

class Solution:
  def kSmallestPairs(self, nums1: List[int], nums2: List[int], k: int) -> List[List[int]]:
    queue = []
    pairs = []
    # this function adds the sum and indices if i and j are in bounds
    def addToQueue(i, j):
      if i < len(nums1) and j < len(nums2):
        heapq.heappush(queue, [nums1[i] + nums2[j], i, j])
    # add the first sum to our queue
    addToQueue(0, 0)
    while (len(queue) and len(pairs) < k):
      # get min sum from our queue
      val, i, j = heapq.heappop(queue)
      # add the values to our pairs list
      pairs.append([nums1[i], nums2[j]])
      # add the next element from nums2 to the same from nums1
      addToQueue(i, j + 1)
      # if we're at the smallest element from nums2, also add the next element from nums1 with nums2
      if (j == 0):
        addToQueue(i + 1, j)
    return pairs
