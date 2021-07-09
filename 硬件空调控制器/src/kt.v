module kt(key0,sw1,clk,LED9);
input key0;//总开关输入
input clk;
output sw1;//开关显示
output LED9;
reg LED9;
reg sw1;
always @(posedge clk)
begin
if(key0==1'b1)
begin
sw1<=1'b1;
LED9<=1'b1;
end
else
begin
sw1<=1'b0;
LED9<=1'b0;
end
end
endmodule
