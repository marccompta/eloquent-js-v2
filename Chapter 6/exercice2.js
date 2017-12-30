function StretchCell(inner, width, height)
{
    this.inner = inner;
    this.consMinWidth = width;
    this.consMinHeight = height;
}

StretchCell.prototype.minWidth = function()
{
    return Math.max(this.consMinWidth, this.inner.minWidth());
};

StretchCell.prototype.minHeight = function()
{
    return Math.max(this.consMinHeight, this.inner.minHeight());
};

StretchCell.prototype.draw = function(width, height)
{
    return this.inner.draw(width, height);
};
