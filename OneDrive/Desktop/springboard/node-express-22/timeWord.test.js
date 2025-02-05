const timeToWords = require("./timeWord")


describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeToWords).toBe('function');
  });


  describe('#timeToWords', () => {
    test('should return "midnight" for 00:00', () => {
      expect(timeToWords("00:00")).toBe("midnight");
    });
  
    test('should return "twelve twelve am" for 00:12', () => {
      expect(timeToWords("00:12")).toBe("twelve twelve am");
    });
  
    test('should return "one o’clock am" for 01:00', () => {
      expect(timeToWords("01:00")).toBe("one o’clock am");
    });
  
    test('should return "six oh one am" for 06:01', () => {
      expect(timeToWords("06:01")).toBe("six oh one am");
    });
  
    test('should return "six ten am" for 06:10', () => {
      expect(timeToWords("06:10")).toBe("six ten am");
    });
  
    test('should return "six eighteen am" for 06:18', () => {
      expect(timeToWords("06:18")).toBe("six eighteen am");
    });
  
    test('should return "six thirty am" for 06:30', () => {
      expect(timeToWords("06:30")).toBe("six thirty am");
    });
  
    test('should return "ten thirty four am" for 10:34', () => {
      expect(timeToWords("10:34")).toBe("ten thirty four am");
    });
  
    test('should return "noon" for 12:00', () => {
      expect(timeToWords("12:00")).toBe("noon");
    });
  
    test('should return "twelve oh nine pm" for 12:09', () => {
      expect(timeToWords("12:09")).toBe("twelve oh nine pm");
    });
  
    test('should return "eleven twenty three pm" for 23:23', () => {
      expect(timeToWords("23:23")).toBe("eleven twenty three pm");
    });
  
    test('should return "twelve thirty pm" for 12:30', () => {
      expect(timeToWords("12:30")).toBe("twelve thirty pm");
    });
  
    test('should return "one o’clock pm" for 13:00', () => {
      expect(timeToWords("13:00")).toBe("one o’clock pm");
    });
  
    test('should return "seven oh five pm" for 19:05', () => {
      expect(timeToWords("19:05")).toBe("seven oh five pm");
    });
  });
  
});

