const roundRobin = (jobs, slice, index) => {
  let timeTaken = 0;
  while (jobs[index] > 0) {
    jobs = jobs.map((job) => {
      if (job > slice) {
        timeTaken += slice;
        return (job -= slice);
      }

      timeTaken += job;
      return 0;
    });
  }

  return timeTaken;
};

// roundRobin([10], 4, 0);
roundRobin([10, 20, 1], 5, 0);
