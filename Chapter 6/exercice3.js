//   I am going to use a system where a sequence object has a method and a property:
//
// * isNext, which contains a boolean indicating whether there are more elements
//   in the sequence and the "next()" method can be called safely (once).
//
// * next(), which returns the next element in the sequence, and moves the iterator 
//   forward. Should only be called when "isNext" is true.

function logFive(sequence)
{
    var counter = 0;
    while(counter < 5 && sequence.isNext)
    {
        console.log(sequence.next());
        counter++;
    }
}

function ArraySeq(array)
{
    this.inner = array;
    this.current = 0;
}

ArraySeq.prototype.next = function()
{
    return this.inner[this.current++];
};

Object.defineProperty(ArraySeq.prototype, "isNext",
{
    get: function()
    {
        return this.current < this.inner.length;
    }
});

function RangeSeq(from, to)
{
    this.current = from;
    this.max = to;
}

RangeSeq.prototype.next = function()
{
    return this.current++;
};

Object.defineProperty(RangeSeq.prototype, "isNext",
{
    get: function()
    {
        return this.current <= this.max;
    }
});
